var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var fs = require('fs');

var indexController = require('./controllers/index.js');
var locationController = require('./controllers/location.js');

var mongoose = require('mongoose');

mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost/wwtTruckLocations');

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');


// stackoverflow suggestion for cross-domain
// try this and this | work heroku!
/*app.all('/', function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "X-Requested-With");
	next();
});*/

// CORS suggestion
/*app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});*/

// app.use(allowCrossDomain);

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', indexController.index);

app.get('/thank-you', indexController.thankYou);

app.post('/current-truck-location', locationController.findTruck);
app.get('/current-truck-location', locationController.reportLocation);

var port = process.env.PORT || 6189;
var server = app.listen(port, function() {
	console.log('Express server listening on port ' + server.address().port);
});
