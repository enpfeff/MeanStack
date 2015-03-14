/**
 * Created by enpfeff on 12/11/14.
 */
'use strict';

define([], function() {
    var init = function() {
        angular.module('core').controller('IndexController', ['$scope',
            function($scope) {
                $scope.name = 'Ian';
            }
        ]);
    };

    return {
        init: init
    };
});
