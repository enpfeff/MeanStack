/**
 * Created by enpfeff on 3/14/15.
 */
'use strict';
(function(head) {
    head.js(
        // Pre-load these for splash-screen progress bar...
        { require    : '../lib/requirejs/require.js',                     size: '80196'   }
    ).ready('ALL', function() {

        require.config ({
            //use this for Prod, enables the JS to have an argument attached to the name. Good for browser caching during reload
            //urlArgs: "v=" + new Date().getTime(),
            paths: {
                /* FOSS */
                'angular' : '../lib/angular/angular',
                'jquery': '../lib/jquery/dist/jquery.min',
                'lodash': '../lib/lodash/lodash.min',
                'bootstrap': '../lib/angular-bootstrap/ui-bootstrap.min',
                'ActiveResource':'../lib/ngActiveResource/dist/ng-active-resource.min',

                'ApplicationConfiguration' : './app/config'
            },
            /* This tells the app what order things need to be loaded in.  This case Angular is the priority */
            shim : {
                'angular' : {
                    'exports' : 'angular'
                },
                'bootstrap': ['angular']
            }
        });

        require( [ 'app/main' ], function( app ) {
            // Application has bootstrapped and started...
        });
    });
}(window.head));

