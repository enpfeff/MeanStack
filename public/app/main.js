/**
 * Created by enpfeff on 11/19/14.
 */
'use strict';

define([
    // foss
    'jquery',
    'lodash',
    'angular',
    'bootstrap',
    'ui-utils',
    'ui-router',
    'ng-route',

    // config
    'ApplicationConfiguration',

    // modules
    './core/core.client.module',
], function($, _, angular, bootstrap, utils, router, ngRoute, ApplicationConfiguration, core) {

    // push deps
    ApplicationConfiguration.applicationModuleVendorDependencies.push(core);
    // init app
    var app = angular.module(ApplicationConfiguration.applicationModuleName, ApplicationConfiguration.applicationModuleVendorDependencies)
        .config(['$locationProvider', function($locationProvider) {
            $locationProvider.hashPrefix('!');
        }]);

    // boot strap it
    angular.element(document).ready(function() {
        //Fixing facebook bug with redirect
        if (window.location.hash === '#_=_') window.location.hash = '#!';

        angular.bootstrap(document, [ApplicationConfiguration.applicationModuleName]);
    });

    return app;
});
