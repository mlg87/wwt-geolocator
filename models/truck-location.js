////////////
// SERVER //
////////////

var mongoose = require('mongoose');

var truckLocationSchema = mongoose.Schema({
	timestamp: {
		type: Date,
		default: Date.now
	},
	latitude: {
		required: true, 
		type: Number
	},
	longitude: {
		required: true,
		type: Number
	}
});

var TruckLocation = mongoose.model('TruckLocation', truckLocationSchema);

module.exports = TruckLocation;