$(document).ready(function() {

	$('#geo-setter').click(function() {
		console.log('the btn was clicked');
		var results = {
			lat: Number,
			lng: Number,
			acc: Number
		};
		var options = {
			enableHighAccuracy: true,
			timeout: 10000,
			maximumAge: 0
		};
		var success = function(pos) {
			var coord = pos.coords;
			results.lat = coord.latitude;
			results.lng = coord.longitude;
			results.acc = coord.accuracy;
		};
		var err = function(err) {
			console.error('There was an issue getting the coordinates :(');
		};
		
		navigator.geolocation.getCurrentPosition(success, err, results);
		console.log('results : ', results);
		
	});

});

// function getLocation() {
//     if (navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition(showPosition);
//     } else { 
//         x.innerHTML = "Geolocation is not supported by this browser.";
//     }
// }