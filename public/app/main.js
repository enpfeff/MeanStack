/**
 * Created by enpfeff on 11/19/14.
 */
'use strict';

define([
    'jquery',
    'lodash',
    'angular',
    'bootstrap',
    'ApplicationConfiguration',
    './core/core.client.module'
], function($, _, angular, bootstrap, ApplicationConfiguration, core) {

    // push deps
    ApplicationConfiguration.applicationModuleVendorDependencies.push(core);
    // init app
    var app = angular.module(ApplicationConfiguration.applicationModuleName, ApplicationConfiguration.applicationModuleVendorDependencies);

    // boot strap it
    angular.element(document).ready(function() {
        angular.bootstrap(document, [ApplicationConfiguration.applicationModuleName]);
    });

    return app;
});
