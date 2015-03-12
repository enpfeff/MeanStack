/**
 * Created by enpfeff on 3/11/15.
 */
define([], function(){
    'use strict';
    return [ function(){
        var Service = function() {

            this.observerCallbacks = [];

            this.notifyObservers = function() {
                if(this.observerCallbacks.length > 0){
                    this.observerCallbacks.forEach(function (callback) {
                        callback();
                    });
                }
            };

            this.registerObserver = function(callback){
                if(typeof callback === 'function'){
                    this.observerCallbacks.push(callback);
                }
            };
        };

        return Service;
    }];
});