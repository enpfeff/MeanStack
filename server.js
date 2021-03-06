/**
 * Created by pfefferi on 3/18/15.
 */
'use strict';
/**
 * Module dependencies.
 */
var init = require('./config/init')(),
    config = require('./config/config'),
    mongoose = require('mongoose'),
    chalk = require('chalk');

/**
 * Main application entry file.
 * Please note that the order of loading is important.
 */

// Bootstrap db connection
var db;
if (config.db.on) {
    db = mongoose.connect(config.db.uri, config.db.options, function (err) {
        if (err) {
            console.error(chalk.red('Could not connect to MongoDB!'));
            console.log(chalk.red(err));
        }
    });
    mongoose.connection.on('error', function (err) {
            console.error(chalk.red('MongoDB connection error: ' + err));
            process.exit(-1);
        }
    );
}
// Init the express application
var app = require('./config/express')(db);

// Start the app by listening on <port>
app.listen(config.port);

// Expose app
module.exports = app;

// Logging initialization
console.log('--');
console.log(chalk.green(config.app.title + ' application started'));
console.log(chalk.green('Environment:\t\t\t' + process.env.NODE_ENV));
console.log(chalk.green('Port:\t\t\t\t' + config.port));

if (!config.db.on) {
    console.log(chalk.green('MongoDB:\t\t\tOff'));
} else {
    console.log(chalk.green('Database:\t\t\t' + config.db.uri));
}
if (process.env.NODE_ENV === 'secure') {
    console.log(chalk.green('HTTPs:\t\t\t\ton'));
}
console.log('--');