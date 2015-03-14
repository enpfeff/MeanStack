/**
 * Created by enpfeff on 3/13/15.
 */
'use strict';

define(['ApplicationConfiguration','app/modules/core/controllers/IndexController'], function(ApplicationConfiguration, controller) {
    var init = function() {
        ApplicationConfiguration.registerModule('core');
        controller.init();
    };

    return {
        init : init
    };
});


