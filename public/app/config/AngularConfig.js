/**
 * Created by enpfeff on 3/12/15.
 */
define([], function(){
    'use strict';

    var initialize = function(ngModule) {
       ngModule.config(['$locationProvider',
           function($locationProvider) {
               $locationProvider.hashPrefix('!');
           }
       ]);
    };

    return {
        initialize: initialize
    };
});