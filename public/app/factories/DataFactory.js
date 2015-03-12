/**
 * Created by enpfeff on 3/11/15.
 */
define([], function() {
    'use strict';
    return [
        '$http',
        'ServiceAMO',
        function($http, ServiceAMO){
            // global Definitions -------------------------------------------- >
            var inventoryData;

            // constructor for Inheritance ------------------------------------ >
            var DataFactory = function() {
                ServiceAMO.apply(this, arguments);
            };
            DataFactory.prototype = new ServiceAMO();

            // public -------------------------------------------------------- >
            DataFactory.prototype = {
                // put definitions for stuff in here

                init : function() {
                    $http.get('http://localhost:8080/FoodElementServices/webresources/com.bbi.foodelement.entity.item').success(function(data) {
                        inventoryData = 'yay';
                    }).error(function(error) {
                        console.log('getting here', error);
                        inventoryData = 'nay';
                    });
                    return inventoryData;
                }

            };

            return DataFactory;
        }];
});