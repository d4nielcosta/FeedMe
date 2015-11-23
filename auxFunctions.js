/**
 * Created by daniel on 23/11/2015.
 */

function postcodeToCord(postcode) {
    $.ajax({
        type: "GET",
        url: "http://api.postcodes.io/postcodes/" + postcode,
        dataType: "json",
        success: function (data) {
            var longitude = data["result"]["longitude"];
            var latitude = data["result"]["latitude"];

            return [longitude, latitude];

        },
        error: function () {
            alert("api unavailable");
        }
    });

}