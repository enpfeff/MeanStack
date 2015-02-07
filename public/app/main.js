/**
 * Created by enpfeff on 11/19/14.
 */
'use strict';

require.config({
    //use this for Prod, enables the JS to have an argument attached to the name. Good for browser caching during reload
    //urlArgs: "v=" + new Date().getTime(),
    paths: {
        /* FOSS */
        'angular' : '../lib/angular/angular',
        'jquery': '../lib/jquery/dist/jquery.min',
        'lodash': '../lib/lodash/lodash.min',
        'bootstrap': '../lib/angular-bootstrap/ui-bootstrap.min'

    },
    /* This tells the app what order things need to be loaded in.  This case Angular is the priority */
    shim : {
        'angular' : {
            'exports' : 'angular'
        },
        'bootstrap': ['angular']
    }
});

require([
    'require',
    'jquery',
    'lodash',
    'angular'
], function(require, $, _, angular) {

    require(['app'], function(app) {

        // When the DOM is ready go tell the app to initialize all the JS then tie it to the DOM
        // see app.js
        angular.element(document).ready(function() {
            app.initialize(function() {
                angular.bootstrap(document, ['app']);
            });
        });
    });
});