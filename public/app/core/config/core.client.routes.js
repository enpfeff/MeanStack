/**
 * Created by enpfeff on 3/14/15.
 */
define([], function(){
    'use strict';

    var RouteManager = function($stateProvider, $urlRouterProvider) {
            // Redirect to home view when route not found
            $urlRouterProvider.otherwise('/');

            // Home state routing
            $stateProvider.state('home', {
                url: '/',
                templateUrl: '/app/core/pages/index.client.view.html'
            });
    };


    return ['$stateProvider', '$urlRouterProvider', RouteManager];
});