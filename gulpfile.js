'use strict';
var gulp = require('gulp');
var gutil = require('gulp-util');
var del = require('del');
var uglify = require('gulp-uglify');
var gulpif = require('gulp-if');
var exec = require('child_process').exec;

var pkg = require('./package.json');
var fs = require('fs');

var nodemon = require('gulp-nodemon');
var notify = require('gulp-notify');

var minifyHtml = require('gulp-minify-html');

var buffer = require('vinyl-buffer');
var argv = require('yargs').argv;
// sass
var minifyCss = require('gulp-minify-css');
var concatCss = require('gulp-concat-css');
var autoprefixer = require('autoprefixer-core');
var sourcemaps = require('gulp-sourcemaps');
// js
var watchify = require('watchify');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
// live reload
var refresh = require('gulp-livereload');
var livereload = require('connect-livereload');
// linting
var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');
// testing/mocha
var mocha = require('gulp-mocha');

// gulp build --production
var production = !!argv.production;
// determine if we're doing a build
// and if so, bypass the livereload
var build = argv._.length ? argv._[0] === 'build' : false;
var watch = argv._.length ? argv._[0] === 'watch' : true;

var paths = {
    js: ['*.js', '!./public/lib/**/*.js', './app/**/*.js', '!./node_modules/**/*.*', './public/**/*.js', '!./dist/**/*.*'],
    html: ['app/views/*.html', 'public/modules/**/view/*.html'],
    css: ['!public/lib/**', 'public/modules/**/css/*.css']
};

var livereloadport = 35729;

// ----------------------------
// Error notification methods
// ----------------------------
var beep = function() {
    var os = require('os');
    var file = 'gulp/error.wav';
    if (os.platform() === 'linux') {
// linux
        exec("aplay " + file);
    } else {
// mac
        console.log("afplay " + file);
        exec("afplay " + file);
    }
};
var handleError = function(task) {
    return function(err) {
        beep();
        notify.onError({
            message: task + ' failed, check the logs..',
            sound: false
        })(err);
        gutil.log(gutil.colors.bgRed(task + ' error:'), gutil.colors.red(err));
    };
};


// --------------------------
// CUSTOM TASK METHODS
// --------------------------
var tasks = {
    // --------------------------
    // Delete build folder
    // --------------------------
    clean: function(cb) {
        del(['./dist'], cb);
    },
    // --------------------------
    // Delete Lib and Build folders
    // --------------------------
    clear: function(cb) {
        del(['./dist', './node_modules', './public/lib'], cb);
    },
    // --------------------------
    // Copy static assets
    // --------------------------
    assets: function() {
        return gulp.src('./public/lib/**/*')
            .pipe(gulp.dest('./dist/assets/'));
    },
    // --------------------------
    // HTML
    // --------------------------
    // html templates (when using the connect server)
    templates: function() {
        var opts = {
            conditionals: true,
            spare:true
        };
        if (production) {
            return gulp.src('./public/modules/**/view/*.html')
                .pipe(minifyHtml(opts))
                .pipe(gulp.dest('./dist/views'));
        } else {
            return gulp.src('./public/modules/**/view/*.html')
                .pipe(gulp.dest('./dist/views'));
        }

    },
    // --------------------------
    // Browserify
    // --------------------------
    browserify: function() {
        var bundler = browserify('./public/app.js', {
            debug: !production,
            cache: {}
        });
        // determine if we're doing a build
        // and if so, bypass the livereload
        var build = argv._.length ? argv._[0] === 'build' : false;
        if (watch) {
            bundler = watchify(bundler);
        }
        var rebundle = function() {
            return bundler.bundle()
                .on('error', handleError('Browserify'))
                .pipe(source('app.js'))
                .pipe(gulpif(production, buffer()))
                .pipe(gulpif(production, uglify()))
                .pipe(gulp.dest('./dist/'));
        };
        bundler.on('update', rebundle);
        return rebundle();
    },
    // --------------------------
    // linting
    // --------------------------
    lintjs: function() {
        return gulp.src([
            'gulpfile.js',
            './public/**/*.js',
            './app/**/*.js'
        ]).pipe(jshint())
            .pipe(jshint.reporter(stylish))
            .on('error', function() {
                beep();
            });
    },
    // --------------------------
    // Optimize asset images
    // --------------------------
    optimize: function() {
        return gulp.src('./client/assets/**/*.{gif,jpg,png,svg}')
            .pipe(imagemin({
                progressive: true,
                svgoPlugins: [{removeViewBox: false}],
                // png optimization
                optimizationLevel: production ? 3 : 1
            }))
            .pipe(gulp.dest('./client/assets/'));
    },

    css: function() {
        if (production) {
            return gulp.src('./public/modules/**/css/*.css')
                .pipe(concatCss('bundle.css'))
                .pipe(minifyCss({keepBreaks:false}))
                .pipe(gulp.dest('./dist/css'));
        } else {
            return gulp.src('./public/modules/**/css/*.css')
                .pipe(concatCss('bundle.css'))
                .pipe(gulp.dest('./dist/css'));
        }
    }
};

//--------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------

// --------------------------
// CUSTOMS TASKS
// --------------------------
gulp.task('clean', tasks.clean);
// for production we require the clean method on every individual task
var req = build ? ['clean'] : [];
// individual tasks
gulp.task('templates', req, tasks.templates);
gulp.task('assets', req, tasks.assets);
gulp.task('browserify', req, tasks.browserify);
gulp.task('lint:js', tasks.lintjs);
gulp.task('optimize', tasks.optimize);
gulp.task('css', req, tasks.css);
gulp.task('clear', tasks.clear);

gulp.task('info', ['browserify'], function(){
    fs.writeFile('dist/build-info.txt', 'App: ' + pkg.name);
    fs.appendFile('dist/build-info.txt','\nBuild Date: ' + new Date());
    fs.appendFile('dist/build-info.txt','\nVersion: ' + pkg.version);
});
// --------------------------
// DEV/WATCH TASK
// --------------------------
gulp.task('watch', ['assets', 'templates', 'css', 'browserify', 'nodemon'], function() {

// --------------------------
// start refresh
// --------------------------
    refresh.listen(livereloadport);

// --------------------------
// watch:sass
// --------------------------
    gulp.watch('./client/scss/**/*.scss', ['reload-sass']);

// --------------------------
// watch:js
// --------------------------
    gulp.watch('./public/**/*.js', ['browserify']);

// --------------------------
// watch:html
// --------------------------
    gulp.watch('./public/modules/**/view/*.html', ['templates']);

// --------------------------
// watch:Dist
// --------------------------
    gulp.watch('./dist/**/*.*').on('change', refresh.changed);

    gutil.log(gutil.colors.bgGreen('Watching for changes...'));
});

// Dev task to start node server
gulp.task('nodemon', ['assets', 'templates', 'browserify'], function () {
    nodemon({
        script: 'server.js',
        ext: 'html js',
        env: {
            'NODE_ENV': 'development'
        },
        ignore: ['/node_modules/**/*.*', '/dist/**/*.js', '/public/**/*'],
        nodeArgs: ['--debug']
    });
});

// build task
gulp.task('build', [
    'clean',
    'templates',
    'css',
    'assets',
    'browserify',
    'info'
]);

gulp.task('default', ['watch']);

// gulp : for development and livereload
// gulp build : for a production unminified build
// gulp build --production : for a minified production build
// gulp clear : removes all npm bower and dist directories (super clean)
