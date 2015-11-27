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


	
