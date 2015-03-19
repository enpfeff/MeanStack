'use strict';

define([
    //foss
    'angular',

    //config
    'ApplicationConfiguration',

    //controllers
    './controllers/CoreController',

    //routes
    './config/core.client.routes'
], function (angular, ApplicationConfiguration, CoreController, RouteManager) {
        var moduleName = ApplicationConfiguration.applicationModuleName + '.core';

        angular.module(moduleName,[])
            .controller( 'CoreController', CoreController )
            .config(RouteManager);

    return moduleName;
});



