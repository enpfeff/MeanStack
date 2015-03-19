/**
 * Created by pfefferi on 3/18/15.
 */
'use strict';

/**
 * Module dependencies.
 */
exports.index = function(req, res) {
    res.render('index', {
        user: req.user || null,
        request: req
    });
};