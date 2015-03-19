'use strict';

// Declare public level module which depends on views, and components
var angular = require('angular'),
    config = require('./config'),
    core = require('./modules/core');

require('angular-ui-router');

angular.element(document).ready(function() {
    var requires = [
        'ui.router',
        core.name
    ];

    window.app = angular.module(config.ApplicationName, requires).config(['$locationProvider',
        function($locationProvider) {
            $locationProvider.hashPrefix('!');
        }
    ]);
    //angular.module(config.ApplicationName)
    angular.bootstrap(document, [config.ApplicationName]);
});


