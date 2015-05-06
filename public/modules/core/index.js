/**
 * Created by pfefferi on 3/18/15.
 */
var config = require('../../config');
var angular = require('angular');

var app = angular.module(config.ApplicationName + '.core', []);

app.controller('CoreController', require('./controllers/CoreController'));

app.config(require('./config/Routes'));

module.exports = app;