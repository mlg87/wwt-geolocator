////////////
// SERVER //
////////////

var mongoose = require('mongoose');
var TruckLocation = require('../models/truck-location.js');

var locationController = {
	findTruck: function(req, res, next) {
		var currentTruckLocation = req.body;
		console.log('TRUCK LOCATION: LAT: ', currentTruckLocation.latitude, ' | LONG: ', currentTruckLocation.longitude);
	}
};

module.exports = locationController;