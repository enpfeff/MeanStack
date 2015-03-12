/**
 * Created by enpfeff on 12/11/14.
 */
'use strict';

define([
    'angular',
    'jquery',
    'bootstrap',
    'controllers/header',
    'factories/header',
    'ActiveResource'
], function(angular,
            $,
            bootstrap,
            controllers,
            services,
            $resource) {

    var initialize = function(callback) {
        //this is the heart of the angular app
        var mainModule = angular.module('app', [
                'ui.bootstrap',
                'ActiveResource'
            ]);

        // for these files see their associated header.js
        controllers.initialize(mainModule);
        services.initialize(mainModule);
        // go back to main and bootstrap/tie it to the DOM
        callback();
    };

    return {
        initialize: initialize
    };
});