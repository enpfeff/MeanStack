/**
 * Created by enpfeff on 3/18/15.
 */
var RouteManager = function($stateProvider) {

    // Home state routing
    $stateProvider.state('overview', {
        url: '/',
        templateUrl: 'views/dashboard/view/overview.dashboard.html'
    }).state('inventory', {
        url: '/inventory',
        templateUrl: 'views/dashboard/view/inventory.dashboard.html'
    }).state('cart', {
        url: '/cart',
        templateUrl: 'views/dashboard/view/cart.dashboard.html'
    }).state('recipe', {
        url: '/recipe',
        templateUrl: 'views/dashboard/view/recipe.dashboard.html'
    }).state('plan', {
        url: '/plans',
        templateUrl: 'views/dashboard/view/plan.dashboard.html'
    });
};

module.exports = ['$stateProvider', RouteManager];