////////////
// SERVER //
////////////

var mongoose = require('mongoose');

var truckLocationSchema = mongoose.Schema({
	timestamp: {
		type: Date,
		default: Date.now
	},
	latitude: Number,
	longitude: Number
});

var TruckLocation = mongoose.model('TruckLocation', truckLocationSchema);

model.exports = TruckLocation;