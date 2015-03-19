/**
 * Created by pfefferi on 3/18/15.
 */
var config = require('../../config');
var angular = require('angular');

var app = angular.module(config.ApplicationName + '.core', []);

app.controller('HeaderController', require('./controllers/HeaderController'));
app.controller('SidebarController', require('./controllers/SidebarController'));
app.config(require('./config/core.routes'));

module.exports = app;