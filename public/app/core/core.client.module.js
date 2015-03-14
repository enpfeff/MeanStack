'use strict';

define([
    'angular',
    './controllers/CoreController'
], function (angular, CoreController) {
        var moduleName = 'foodelement.core';

        angular.module(moduleName,[])
            .controller( 'CoreController', CoreController );

    return moduleName;
});



