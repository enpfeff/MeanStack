/**
 * Created by enpfeff on 12/11/14.
 */
/**
 * Created by pfefferi on 8/28/14.
 */
define([
    'angular',
    'lodash',

    /*Services*/
    'services/InitService'
], function(angular, _, initService){
    'use strict';

    var services = {
        InitService: initService
    };

    var initialize = function(ngModule) {
        _.each(services, function(service, name) {
            ngModule.service(name, service);
        });
    };

    return {
        initialize: initialize
    };
});