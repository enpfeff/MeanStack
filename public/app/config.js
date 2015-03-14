
define([], function() {
    'use strict';

    // Init the application configuration module for AngularJS application
    // Init module configuration options
    var applicationModuleName = 'foodelement';
    var applicationModuleVendorDependencies = ['ui.bootstrap'];

    return {
        applicationModuleName: applicationModuleName,
        applicationModuleVendorDependencies: applicationModuleVendorDependencies
    };
});