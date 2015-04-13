$(function(){
	$.ajaxSetup({
		headers: { "Access-Control-Allow-Origin": "*"}
	});
	$.get("//wwt-trucklocator.herokuapp.com/current-truck-location", function (req, res) {
		console.log("res: ", res);
	});
});

