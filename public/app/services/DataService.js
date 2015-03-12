/**
 * Created by enpfeff on 12/11/14.
 */
define([], function() {
    'use strict';
    return ['DataFactory', function(DataFactory) {
        var DataService = new DataFactory();
        return DataService;
    }];
});