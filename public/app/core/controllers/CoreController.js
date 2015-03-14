/**
 * Created by enpfeff on 12/11/14.
 */
'use strict';

define([], function() {

    var CoreController = function($scope) {
        $scope.name = 'Ian';
    };

    return ['$scope', CoreController ];

});
