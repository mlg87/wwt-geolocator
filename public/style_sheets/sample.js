$(function(){
	$.ajaxSetup({
		headers: { "header": "Access-Control-Allow-Origin"}
	});
	$.ajax({
		url: 'http://wwt-trucklocator.herokuapp.com/current-truck-location',
		function(req, res) {
			console.log('res: ', res);
		}
	});
});