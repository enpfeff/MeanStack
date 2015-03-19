/**
 * Created by pfefferi on 3/18/15.
 */
var RouteManager = function($stateProvider, $urlRouterProvider) {
    // Redirect to home view when route not found
    $urlRouterProvider.otherwise('/');
};

module.exports = ['$stateProvider', '$urlRouterProvider', RouteManager];