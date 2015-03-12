/**
 * asdf Created by enpfeff on 12/11/14.
 */ 
/** Try it again
 * Created by pfefferi on 8/28/14. Oh Boy
 */
'use strict';

module.exports = function(grunt){

    // Unified Watch Object
    var watchFiles = {
        serverViews: ['app/views/**/*.*'],
        serverJS: ['Gruntfile.js', 'server/**/*.js', 'config/**/*.js'],
        clientViews: ['public/app/html/*.html'],
        clientJS: ['public/app/**/*.js'],
        clientCSS: ['public/css/**/*.css'],
        commonJS: ['../../common/js/**/*.js'],
        commonCSS: ['../../common/css/**/*.css']
    };

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        watch: {
            serverViews: {
                files: watchFiles.serverViews,
                options: {
                    livereload: true
                }
            },
            serverJS: {
                files: watchFiles.serverJS,
                tasks: ['jshint'],
                options: {
                    livereload: true
                }
            },
            clientViews: {
                files: watchFiles.clientViews,
                options: {
                    livereload: true
                }
            },
            clientJS: {
                files: watchFiles.clientJS,
                tasks: ['jshint'],
                options: {
                    livereload: true
                }
            },
            clientCSS: {
                files: watchFiles.clientCSS,
                tasks: ['csslint'],
                options: {
                    livereload: true
                }
            },
            commonCSS: {
                files: watchFiles.commonCSS,
                tasks: ['csslint'],
                options: {
                    livereload: true
                }
            },
            commonJS: {
                files: watchFiles.commonJS,
                tasks: ['jshint'],
                options: {
                    livereload: true
                }
            }
        },
        jshint: {
            all: {
                src: watchFiles.clientJS.concat(watchFiles.serverJS.concat(watchFiles.commonJS)),
                options: {
                    jshintrc: true
                }
            }
        },
        csslint: {
            options: {
                csslintrc: '.csslintrc'
            },
            all: {
                src: watchFiles.clientCSS
            }
        },
        uglify: {
            production: {
                options: {
                    mangle: false
                },
                files: {
                    'public/dist/application.min.js': 'public/dist/application.js'
                }
            }
        },
        cssmin: {
            combine: {
                files: {
                    'public/dist/application.min.css': '<%= applicationCSSFiles %>'
                }
            }
        },
        nodemon: {
            dev: {
                script: 'server.js',
                options: {
                    nodeArgs: ['--debug'],
                    ext: 'js,html',
                    watch: watchFiles.serverViews.concat(watchFiles.serverJS)
                }
            },
            prod: {
                script: 'server.js',
                options: {
                    env : {
                        PORT: 3001
                    }
                }
            }
        },
        concurrent: {
            default: ['nodemon:dev', 'watch'],
            debug: ['nodemon:dev', 'watch', 'node-inspector'],
            options: {
                logConcurrentOutput: true,
                limit: 10
            }
        },
        env: {
            dev: {
                NODE_ENV: 'development'
            },
            test: {
                NODE_ENV: 'test'
            },
            secure: {
                NODE_ENV: 'secure'
            }
        },

        clean : ['node_modules', 'public/lib']

    });

    // Load NPM tasks
    require('load-grunt-tasks')(grunt);

    // Making grunt default to force in order not to break the project.
    // grunt.option('force', true);

    // Default task(s).
    grunt.registerTask('default', ['lint','env:dev', 'concurrent:default']);

    grunt.registerTask('prod',['nodemon:prod']);

    // Debug task.
    grunt.registerTask('debug', ['lint', 'concurrent:debug']);

    // Clean it up
    grunt.registerTask('clear', ['clean']);

    // Lint task(s).
    grunt.registerTask('lint', ['jshint', 'csslint']);

    // Build task(s).
    grunt.registerTask('build', ['lint', 'uglify', 'cssmin']);
};
