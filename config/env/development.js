/**
 * Created by enpfeff on 3/11/15.
 */
'use strict';

module.exports = {
    db: {
        on: true,
        uri: 'mongodb://localhost/foodelement',
        options: {
            user: '',
            pass: ''
        }
    },
    log: {
        // Can specify one of 'combined', 'common', 'dev', 'short', 'tiny'
        format: 'dev',
        // Stream defaults to process.stdout
        // Uncomment to enable logging to a log on the file system
        options: {
            //stream: 'access.log'
        }
    },
    app: {
        title: 'FoodElement - Development Environment'
    }
};
