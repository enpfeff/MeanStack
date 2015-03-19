/**
 * Created by pfefferi on 3/18/15.
 */

var app = angular.module('app.core', []);

app.controller('CoreController', require('./controllers/CoreController'));
app.config(require('./config/core.routes'));

module.exports = app;