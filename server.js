// author: Ian Pfeffer
// set up ======================================================================
var express = require('express');
var app = express();
var port = process.env.PORT || 3001;

var context="/FoodElement";

var morgan = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

// configuration ===============================================================

// static files ================================================================
app.use(context + '/lib', express.static('./public/lib'));
app.use(context + '/app', express.static('./public/app'));
app.use(context + '/css', express.static('./public/css'));

// log every request to the console ok
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({'extended':'true'}));
//app.use(bodyParser.js());
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(methodOverride());

// routes ======================================================================
require('./server/routes/routes.js')(app);

// listen (start app with node server.js) ======================================
app.listen(port);
console.log('App listening on port ' + port);
