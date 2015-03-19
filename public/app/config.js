
define([], function() {
    'use strict';

    // Init the application configuration module for AngularJS application
    // Init module configuration options
    var contextRoot = 'FoodElement';
    var applicationModuleName = 'foodelement';
    var applicationModuleVendorDependencies = ['ui.bootstrap', 'ui.router', 'ui.utils', 'ngRoute'];

    return {
        contextRoot : contextRoot,
        applicationModuleName: applicationModuleName,
        applicationModuleVendorDependencies: applicationModuleVendorDependencies
    };
});