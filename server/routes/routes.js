/**
 * Created by enpfeff on 12/11/14.
 */

'use strict';

var config = require('../../config/config');

module.exports = function(app) {

    // Root routing
    var core = require('../../server/controllers/index.server.controller');

    app.route(config.context).get(core.index);
   // app.route('/').get(core.index);

};