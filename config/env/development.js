/**
 * Created by pfefferi on 3/18/15.
 */
'use strict';

module.exports = {
    db: {
        uri: 'mongodb://localhost/mean-dev',
        options: {
            user: '',
            pass: ''
        },
        on : false
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
        title: 'BBI - Development Environment'
    }
};