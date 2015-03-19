/**
 * Created by enpfeff on 3/14/15.
 */
define(['ApplicationConfiguration'], function(ApplicationConfiguration){
    'use strict';

    var RouteManager = function($stateProvider) {

        $stateProvider.state('home', {
            url: '/' + ApplicationConfiguration.contextRoot + '/Dashboard',
            templateUrl: 'app/dashboard/pages/dashboard.client.view.html'
        });

    };

    return ['$stateProvider', '$urlRouterProvider', RouteManager];
});