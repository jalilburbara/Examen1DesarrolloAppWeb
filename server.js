/*  
npm install method-override morgan body-parser mongoose express nodemon --save
-or- 
npm install
*/

var express        = require('express');
var mongoose       = require('mongoose');
var bodyParser     = require('body-parser');
var path     	   = require('path');
var methodOverride = require('method-override');
var logger 		   = require('morgan');
var vuelos         = require('./app/routes/vuelos');
var inicio         = require('./app/routes/inicio');
var app            = express();

var db = require('./config/db');

mongoose.connect(db.url, function (error) {
    if (error) console.error(error);
    else console.log('mongo connected');
});

var port = 3000;

app.use('/api/vuelos', vuelos);

app.use('/', inicio);

app.listen(port);
console.log('Magic happens on port ' + port);

exports = module.exports = app;