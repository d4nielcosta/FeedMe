/**
 * Created by daniel on 23/11/2015.
 */

function postcodeToCoordLon(postcode) {
    var longitude;
    var latitude;
    $.ajax({
        type: "GET",
        url: "http://api.postcodes.io/postcodes/" + postcode,
        async: false,
        dataType: "json",
        success: function (data) {
            longitude = data["result"]["longitude"];
            latitude = data["result"]["latitude"];

        },
        error: function (data) {
            alert("api unavailable");
        }
    });
    return longitude;

}

function postcodeToCoordLat(postcode) {
    var longitude;
    var latitude;
    $.ajax({
        type: "GET",
        url: "http://api.postcodes.io/postcodes/" + postcode,
        async: false,
        dataType: "json",
        success: function (data) {
            longitude = data["result"]["longitude"];
            latitude = data["result"]["latitude"];

        },
        error: function () {
            alert("api unavailable");
        }
    });
    return latitude;

}

function googleMapsReverseAddress(postcode){
	postcode = postcode.replace(" ", "")  // Trim all spaces

	$url = 'http://maps.google.com/maps/geo?q=" + postcode + ",+UK&output=csv&sensor=false';

	$data = @file_get_contents($url);

	$result = explode(",", $data);

	//echo $result[0]; // status code
	//echo $result[1]; // accuracy
	//echo $result[2]; // latitude
	//echo $result[3]; // longitude

	return $result[2], $result[3];

}
	
