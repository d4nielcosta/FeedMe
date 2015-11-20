/**
 * Created by daniel on 20/11/2015.
 */

function parseCSV() {
    $.ajax({
        type: "GET",
        url: "Glasgow_rest_db.csv",
        dataType: "text",
        success: function (data) {
            processData(data);
        }
    });
}

function processData(allText) {
    var data = {};
    alert("allText \n" + allText);
    var record_num = 11;  // or however many elements there are in each row
    var allTextLines = allText.split(/\r\n|\n/);
    alert("allTextLines \n" + allTextLines);
    var headings = allTextLines[0].split(',');
    alert("entries \n" + headings);

    i = 1;
    while (allTextLines[i]) {
        FHRSID = allTextLines[1];

        data[FHRSID] = {
            "ExtractDate": allTextLines[0],
            "BusinessName": allTextLines[2],
            "BusinessType": allTextLines[3],
            "BusinessTypeID": allTextLines[4],
            "AddressLine2": allTextLines[5],
            "AddressLine3": allTextLines[6],
            "PostCode": allTextLines[7],
            "RatingDate": allTextLines[8],
            "Longitude": allTextLines[9],
            "Latitude": allTextLines[10]
        };
        i++;

    }


}
/*

 */
function processPostcode(postcode, radius){

    for(var i = 0; i < data.length; i++){

    }



}
