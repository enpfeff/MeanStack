/**
 * Created by enpfeff on 3/11/15.
 */
/**
 * Created by pfefferi on 8/28/14.
 */
define([
    'lodash',

    // Master Objects
    'amo/ServiceAMO',

    //Factories
    'factories/DataFactory',

    //Services
    'services/DataService'

], function(
    // FOSS
    _,

    // Parent Objects
    serviceAMO,

    //Factories
    dataFactory,

    //Services
    dataService

) {

    'use strict';

    //define services here
    var masterObjects = {
        ServiceAMO : serviceAMO
    };

    var services = {
        DataService : dataService
    };

    var factories = {
        DataFactory : dataFactory
    };

    var initialize = function(ngModule) {

        //init master Objects first
        //if you want functions to be available to EVERY service use this
        _.each(masterObjects, function(masterObject, name){
            ngModule.factory(name, masterObject);
        });

        //factories
        // use these guys to define the functions and variables
        _.each(factories, function(factory, name) {
            ngModule.factory(name, factory);
        });

        //services last
        //use the services in the controllers
        _.each(services, function(service, name) {
            ngModule.service(name, service);
        });

    };

    return {
        initialize: initialize
    };
});
