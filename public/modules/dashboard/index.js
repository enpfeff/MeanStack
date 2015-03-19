/**
 * Created by enpfeff on 3/18/15.
 */

var config = require('../../config');
var angular = require('angular');
var RouteManager = require('./config/config.dashboard')

var app = angular.module(config.ApplicationName + '.dashboard', []);

app.controller('OverviewController', require('./controllers/OverviewController'));
app.controller('InventoryController', require('./controllers/InventoryController'));
app.controller('MealPlanController', require('./controllers/MealPlanController'));
app.controller('RecipeBookController', require('./controllers/RecipeBookController'));
app.controller('ShoppingCartController', require('./controllers/ShoppingCartController'));
app.config(RouteManager);

module.exports = app;