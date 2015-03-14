/**
 * Created by enpfeff on 3/13/15.
 */

var require = {
    //use this for Prod, enables the JS to have an argument attached to the name. Good for browser caching during reload
    //urlArgs: "v=" + new Date().getTime(),
    paths: {
        /* FOSS */
        'angular' : '../lib/angular/angular',
        'jquery': '../lib/jquery/dist/jquery.min',
        'lodash': '../lib/lodash/lodash.min',
        'bootstrap': '../lib/angular-bootstrap/ui-bootstrap.min',
        'ActiveResource':'../lib/ngActiveResource/dist/ng-active-resource.min',
        'ApplicationConfiguration' : 'app/config',
        'foodelement': 'app/foodelement'
    },
    /* This tells the app what order things need to be loaded in.  This case Angular is the priority */
    shim : {
        'angular' : {
            'exports' : 'angular'
        },
        'bootstrap': ['angular']
    }
};
