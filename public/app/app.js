/**
 * Created by enpfeff on 12/11/14.
 */
'use strict';

define([
    'angular',
    'jquery',
    'bootstrap',
    'controllers/header'
], function(angular,
            $,
            bootstrap,
            controllers ) {

    var initialize = function(callback) {
        //this is the heart of the angular app
        var mainModule = angular.module('app', [
                'ui.bootstrap'
            ]);

        // for these files see their associated header.js
        controllers.initialize(mainModule);

        // go back to main and bootstrap/tie it to the DOM
        callback();
    };

    return {
        initialize: initialize
    };
});