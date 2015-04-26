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

		TruckLocation.findOne({}, {}, {sort: {field: 'asc', _id: -1}}, function(err, location) {
			if(err) console.err('ERR FIND MOST RECENT TRUCK LOCATION');
			console.log('MOST RECENT LOCATION: ', location);
			res.send({
				latitude: location.latitude,
				longitude: location.longitude,
				timestamp: location.timestamp
			});
		});

		
		console.log('REQUESTED TRUCK LOCATION');

	}
};

module.exports = locationController;