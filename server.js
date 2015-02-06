// author: Ian Pfeffer
// set up ======================================================================
var express = require('express');
var app = express();
var port = process.env.ianPORT || 8080;

var morgan = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

// configuration ===============================================================

// static files ================================================================
app.use('/lib', express.static('./public/lib'));
app.use('/app', express.static('./public/app'));
app.use('/common', express.static('../../common'));

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
