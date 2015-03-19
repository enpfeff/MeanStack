/**
 * Created by enpfeff on 3/14/15.
 */
'use strict';

define([
    //foss
    'angular',

    //config
    'ApplicationConfiguration',

    //controllers
    './controllers/DashboardController',

    //Routes
    './config/dashboard.client.routes'
], function (angular, ApplicationConfiguration, DashboardController, RouteManager) {
    var moduleName = ApplicationConfiguration.applicationModuleName + '.dashboard';

    angular.module(moduleName,[])
        .controller( 'DashboardController', DashboardController )
        .config(RouteManager);

    return moduleName;
});
