/**
 * Created by enpfeff on 12/11/14.
 */
define([], function() {
    'use strict';

    var controller = ['$scope','DataService', function($scope, dataService) {
       
        $scope.name = dataService.init();

        console.log('debug');
        
    }];

    return controller;
});