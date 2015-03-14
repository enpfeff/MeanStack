/**
 * Created by enpfeff on 11/19/14.
 */
'use strict';

define([
    'require',
    'jquery',
    'lodash',
    'angular',
    'ApplicationConfiguration'
], function(require, $, _, angular, ApplicationConfiguration) {

    require([ApplicationConfiguration.applicationModuleName], function(app) {

        // When the DOM is ready go tell the app to initialize all the JS then tie it to the DOM
        // see app.js
        angular.element(document).ready(function() {
            app.initialize(function() {
                angular.bootstrap(document, [ApplicationConfiguration.applicationModuleName]);
            });
        });
    });
});
