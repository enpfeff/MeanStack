/**
 * Created by enpfeff on 3/11/15.
 */
'use strict';

module.exports = {
    app: {
        title: 'FoodElement',
        description: 'This is where i dont know',
        keywords: 'mongodb, express, angularjs, node.js, mongoose, passport, FoodElement'
    },
    port: process.env.PORT || 3001,
    templateEngine: 'swig',
    // The secret should be set to a non-guessable string that
    // is used to compute a session hash
    sessionSecret: 'foodElement',
    // The name of the MongoDB collection to store sessions in
    sessionCollection: 'sessions',
    // The session cookie settings
    sessionCookie: {
        path: '/',
        httpOnly: true,
        secure: false,
        maxAge: null
        // domain: 'yourdomain.com'
    },
    // The session cookie name
    sessionName: 'connect.sid',
    log: {
        // Can specify one of 'combined', 'common', 'dev', 'short', 'tiny'
        format: 'combined',
        // Stream defaults to process.stdout
        options: {
            stream: 'access.log'
        }
    }
};