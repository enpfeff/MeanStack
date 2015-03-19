/**
 * Created by pfefferi on 3/18/15.
 */
'use strict';

module.exports = function(app) {
    // Root routing
    var core = require('../../app/controllers/core.controller');
    app.route('/').get(core.index);
};