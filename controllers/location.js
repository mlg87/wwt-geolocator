////////////
// SERVER //
////////////

var mongoose = require('mongoose');
var TruckLocation = require('../models/truck-location.js');

var locationController = {
	findTruck: function(req, res, next) {
		var currentTruckLocation = req.body;
		console.log('TRUCK LOCATION: LAT: ', currentTruckLocation.latitude, ' | LONG: ', currentTruckLocation.longitude);
		var newLocation = new TruckLocation({
			latitude: currentTruckLocation.latitude,
			longitude: currentTruckLocation.longitude
		});
		newLocation.save(function(err, locaiton){
			if(err) console.error('THERE WAS AN ERR ATTEMPTING TO SAVE THE TRUCK\'S LOCATION TO THE DB: ', err);
			console.log('LOCATION LOGGED TO THE DB: ', newLocation);
			res.redirect('/thank-you');
		});
	},
	reportLocation: function(req, res, next) {
		// res.header("Access-Control-Allow-Origin", "*");
		/*res.header("Access-Control-Allow-Origin", "*");
		res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");*/

		TruckLocation.findOne({}, {}, { sort: { 'created_at' : -1 } }, function(err, location) {
			console.log('MOST RECENT LOCATION: ', location);
		});

		// console.log('DB ENTRY: ', TruckLocation.find().limit(1).sort({$natural:-1}));
		console.log('REQUESTED TRUCK LOCATION');


		// findOne({}, {}, { sort: { 'created_at' : -1 } }, function(err, post) {
		//   console.log( post );
		// });

	}
};

module.exports = locationController;