/**
 * Created by enpfeff on 12/11/14.
 */
'use strict';

define(['ApplicationConfiguration','bootstrap', 'app/modules/core/core.client.module'], function(ApplicationConfiguration, bootstrap, core){
    var initialize = function(callback) {
        //this is the heart of the angular app

        angular.module(ApplicationConfiguration.applicationModuleName, ApplicationConfiguration.applicationModuleVendorDependencies);
        core.init();
        // go back to main and bootstrap/tie it to the DOM
        callback();
    };

    return {
        initialize: initialize
    };
});