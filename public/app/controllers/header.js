/**
 * Created by enpfeff on 12/11/14.
 */
/**
 * Created by pfefferi on 8/28/14.
 */
define([
    'angular',
    'lodash',

    /*Controllers*/
    'controllers/IndexController'
], function(angular, _, indexController){
    'use strict';

    var controllers = {
        IndexController: indexController
    };

    var initialize = function(ngModule) {
        _.each(controllers, function(controller, name) {
            ngModule.controller(name, controller);
        });
    };

    return {
        initialize: initialize
    };
});