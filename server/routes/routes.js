/**
 * Created by enpfeff on 12/11/14.
 */

'use strict';

var config = require('../../config/config');
var users = require('../../server/controllers/users.server.controller');

module.exports = function(app) {

    // Root routing
    var core = require('../../server/controllers/index.server.controller');

    //app.route(config.context).get(core.index);
    app.route('/').get(users.requiresLogin, core.index);

};