/**
 * Created by enpfeff on 12/11/14.
 */

'use strict';
module.exports = function(app) {

    app.get('/site-name', function(req, res) {
        // load the single view file (angular will handle the page changes on the front-end)
        res.sendfile('./public/app/html/index.html');
    });
};