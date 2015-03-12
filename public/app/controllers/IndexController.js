/**
 * Created by enpfeff on 12/11/14.
 */
define([], function() {
    'use strict';

    var controller = ['$scope','InitService', function($scope, initService) {
       
        $scope.name = initService.init();
        
    }];

    return controller;
});