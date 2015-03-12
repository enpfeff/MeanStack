/**
 * Created by enpfeff on 12/11/14.
 */
define([], function() {
    'use strict';

    var service = ['ActiveResource','$http', function($resource,$http) {
        var inventoryData = 'bad';
        var init = function() {
            $http.get('http://localhost:8080/FoodElementServices/webresources/com.bbi.foodelement.entity.item').success(function(data) {
              inventoryData = 'yay';
            });
            return inventoryData;
        };
        
        return {
            init: init
        };
    }];

    return service;
});