// js for squarespace 

// ajax call inside of initialize

$(initialize());

var map;

var successLatLng;
    
function initialize() {
	var styles = [
  	{
      "featureType": "road.highway",
      "elementType": "geometry.fill",
      "stylers": [
        { "color": "#7FB4E6" }
      ]
    },{
      "featureType": "road.highway",
      "elementType": "geometry.stroke",
      "stylers": [
        { "color": "#5C82A7" }
      ]
    },{
      "featureType": "road.highway.controlled_access",
      "elementType": "geometry.fill",
      "stylers": [
        { "color": "#55789a" }
      ]
    },{
      "featureType": "road.highway.controlled_access",
      "elementType": "geometry.stroke",
      "stylers": [
        { "color": "#32465A" }
      ]
    },{
      "featureType": "landscape.man_made",
      "elementType": "geometry.fill",
      "stylers": [
        { "color": "#ffffff" }
      ]
    },{
      "featureType": "road.arterial",
      "elementType": "geometry.fill",
      "stylers": [
        { "color": "#C7C7C7" }
      ]
    },{
      "featureType": "road.arterial",
      "elementType": "geometry.stroke",
      "stylers": [
        { "color": "#ffffff" },
        { "visibility": "off" }
      ]
    },{
      "featureType": "water",
      "elementType": "geometry.fill",
      "stylers": [
        { "color": "#7CAFE1" }
      ]
    },{
      "featureType": "poi",
      "elementType": "geometry.fill",
      "stylers": [
        { "color": "#a0d39f" }
      ]
    },{
	    "featureType": "road.local",
	    "elementType": "geometry.fill",
	    "stylers": [
	      { "color": "#F5F5F5" }
	    ]
	  },{
	    "featureType": "road.local",
	    "elementType": "geometry.stroke",
	    "stylers": [
	      { "visibility": "off" }
	    ]
	  }
  ];
        
  var styledMap = new google.maps.StyledMapType(styles, {name: 'White Whale Map'});
        
	var mapOptions = {
  	zoom: 12,
		center: new google.maps.LatLng(39.739676, -104.989780),
		mapTypeControlOptions: {
    	mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
    	}
	};
		
	map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
    
	map.mapTypes.set('map_style', styledMap);
	map.setMapTypeId('map_style');

	$.ajax({
	  type: "GET",
	  url: "//wwt-trucklocator.herokuapp.com/current-truck-location",
	  data: { get_param: 'value' },
	  success: function(data) {
	 		console.log("SERVER RESPONSE LAT: ", data.latitude);
	 		var latLng = new google.maps.LatLng(data.latitude, data.longitude);
	 		console.log('GOOGLE MAPS LAT/LNG: ', latLng);
	 		var marker = new google.maps.Marker({
	 			postion: latLng,
	 			map: map
	 		});
	 		console.log('GOOGLE MAPS MARKER: ', marker);
	 		successLatLng = latLng;
			var truckUpdate = data.timestamp;
			console.log('LAST TIMESTAMP: ', truckUpdate);
			console.log('DATA', data);
			$('#lastUpdated').text(
				'The Whale\'s location was last updated ' + moment().startOf('day').fromNow()


			);
	  }
	});
	
	var moveToCenter = function() {
		var center = successLatLng;
		map.panTo(center);
	};
	
	var addMarker = function() {
		var image = '//i1136.photobucket.com/albums/n488/MasonGoetz/mapmarker_wwt_icon2_zps5o5mvhne.png';
		new google.maps.Marker({
			position: successLatLng,
			map: map,
			icon: image
		});
		moveToCenter();
		console.log('ADDMARKER CALLED');
	};


	google.maps.event.addListener(map, 'tilesloaded', addMarker);
}





// initialize inside of ajax call

/*$.ajax({
		  type: "GET",
		  url: "//wwt-trucklocator.herokuapp.com/current-truck-location",
		  data: { get_param: 'value' },
		  success: function(data) {
		 		console.log("SERVER RESPONSE LAT: ", data.latitude);
		 		var latLng = new google.maps.LatLng(data.latitude, data.longitude);
		 		console.log('GOOGLE MAPS LAT/LNG: ', latLng);
		 		var marker = new google.maps.Marker({
		 			postion: latLng,
		 			map: map
		 		});
		 		console.log('GOOGLE MAPS MARKER: ', marker);


	 			var map;
	 		      
	 		  function initialize() {
	 				var styles = [
	 			  	{
	 			      "featureType": "road.highway",
	 			      "elementType": "geometry.fill",
	 			      "stylers": [
	 			        { "color": "#7FB4E6" }
	 			      ]
	 			    },{
	 			      "featureType": "road.highway",
	 			      "elementType": "geometry.stroke",
	 			      "stylers": [
	 			        { "color": "#5C82A7" }
	 			      ]
	 			    },{
	 			      "featureType": "road.highway.controlled_access",
	 			      "elementType": "geometry.fill",
	 			      "stylers": [
	 			        { "color": "#55789a" }
	 			      ]
	 			    },{
	 			      "featureType": "road.highway.controlled_access",
	 			      "elementType": "geometry.stroke",
	 			      "stylers": [
	 			        { "color": "#32465A" }
	 			      ]
	 			    },{
	 			      "featureType": "landscape.man_made",
	 			      "elementType": "geometry.fill",
	 			      "stylers": [
	 			        { "color": "#ffffff" }
	 			      ]
	 			    },{
	 			      "featureType": "road.arterial",
	 			      "elementType": "geometry.fill",
	 			      "stylers": [
	 			        { "color": "#C7C7C7" }
	 			      ]
	 			    },{
	 			      "featureType": "road.arterial",
	 			      "elementType": "geometry.stroke",
	 			      "stylers": [
	 			        { "color": "#ffffff" },
	 			        { "visibility": "off" }
	 			      ]
	 			    },{
	 			      "featureType": "water",
	 			      "elementType": "geometry.fill",
	 			      "stylers": [
	 			        { "color": "#7CAFE1" }
	 			      ]
	 			    },{
	 			      "featureType": "poi",
	 			      "elementType": "geometry.fill",
	 			      "stylers": [
	 			        { "color": "#a0d39f" }
	 			      ]
	 			    },{
	 				    "featureType": "road.local",
	 				    "elementType": "geometry.fill",
	 				    "stylers": [
	 				      { "color": "#F5F5F5" }
	 				    ]
	 				  },{
	 				    "featureType": "road.local",
	 				    "elementType": "geometry.stroke",
	 				    "stylers": [
	 				      { "visibility": "off" }
	 				    ]
	 				  }
	 			  ];
	 		          
	 		    var styledMap = new google.maps.StyledMapType(styles, {name: 'White Whale Map'});
	 		          
	 				var mapOptions = {
	 		    	zoom: 12,
	 					center: new google.maps.LatLng(39.739676, -104.989780),
	 					mapTypeControlOptions: {
	 		      	mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
	 		      	}
	 				};
	 					
	 				map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
	 		      
	 				map.mapTypes.set('map_style', styledMap);
	 				map.setMapTypeId('map_style');
		  }
		});*/