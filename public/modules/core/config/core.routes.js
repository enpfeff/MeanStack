/**
 * Created by pfefferi on 3/18/15.
 */
var RouteManager = function($stateProvider, $urlRouterProvider) {
    // Redirect to home view when route not found
    $urlRouterProvider.otherwise('/');

    // Home state routing
    $stateProvider.state('home', {
        url: '/',
        templateUrl: 'core/view/index.html'
    });
};

module.exports = ['$stateProvider', '$urlRouterProvider', RouteManager];