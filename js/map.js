function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

		var type = getParameterByName('type');
                var map;
                var infowindow;

		var loc = getParameterByName('location');

                // Map vars
                var latitude;
                var longitude;
                var radius = getParameterByName('radius');

                var storedData;
                storedData = getParameterByName('location');
                var x;
                x = postcodeToCoordLat(storedData);
                var y;
                y = postcodeToCoordLon(storedData);

                function lat() {
                    return x;
                }

                function lon() {
                    return y;
                }

                function setCoordinates(x,y, z){
	                latitude = x;
	                longitude = y;
	                radius = z;
                }

                setCoordinates(lat(), lon(), radius * 100)
                var service;
                function initMap() {
                  map = new google.maps.Map(document.getElementById("gmap_canvas"), {
                    center: {lat: latitude, lng: longitude},
                    zoom: 15
                  });

                  infowindow = new google.maps.InfoWindow();

                  service = new google.maps.places.PlacesService(map);
                  service.nearbySearch({
                    location: {lat: latitude, lng: longitude},
                    radius: radius,
                    keyword: type,
                  }, callback);

                  var image = "img/blue_MarkerH.png";
                  var marker = new google.maps.Marker({
                    map: map,
                    position: {lat: latitude, lng: longitude},
                    title: type,
                    icon: image
                  });
                }

                function callback(results, status) {
                  if (status === google.maps.places.PlacesServiceStatus.OK) {
                    for (var i = 0; i < results.length; i++) {
                      createMarker(results[i]);
                    }
                  }
                }

                function createMarker(place) {
                    var placeLoc = place.geometry.location;
                    var marker = new google.maps.Marker({
                        map: map,
                        position: place.geometry.location
                    });

                    var request = { placeId: place.place_id };

                    google.maps.event.addListener(marker,'click',function(){
                        service.getDetails(request, function(place, status) {

                              if (status == google.maps.places.PlacesServiceStatus.OK) {
                                var contentStr = '<h2>'+place.name+' <img  src="img/stars/'+(Math.round(place.rating * 2) / 2).toFixed(1) +'.png" style="display: inline; height: 30px; padding-bottom: 5px;"></h2>'	;
                                if (!!place.formatted_phone_number) contentStr += '<h5>'+place.formatted_address+'</h5>';

				for (i = 0; i<place.reviews.length; i++) {

				contentStr += '<p><b>' + place.reviews[i].author_name + '</b>	 rated: <b>' + place.reviews[i].rating +'</b><br>' + place.reviews[i].text +'</p>';
				}
                                infowindow.setContent(contentStr);
                                infowindow.open(map,marker);
                              } else {
                                var contentStr = "<h5>No Result, status="+status+"</h5>";
                                infowindow.setContent(contentStr);
                                infowindow.open(map,marker);
                              }
                        });

                    });


                }
