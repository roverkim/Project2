// Get the Modal

var modal = $('#myModal')

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = $('#myImg');

var modalImg = $("#modalImg")
var captionText = $("#caption > p");

// Code that Display the Modal that Shows Google Maps Location of Where the Photo was Taken
$('section.timeline').on('click','img',function(){

    // Set CSS for The Modal
    modal.css("display","block");

    // Extract Geolocation from Data Attribute Stored in IMG Tag
    var latitude = $(this).data("latitude");
    var longitude = $(this).data("longitude");

    // Initialize Google Maps
    function initMap(latitude, longitude) {
        console.log("1 Lat is "+ parseFloat(latitude)+ "Long is "+parseFloat(longitude));

        // Create the Map. Center the Map Based on Coordinates Extracted
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 17,
          center: new google.maps.LatLng(parseFloat(latitude),parseFloat(longitude)),
          mapTypeId: 'terrain'
        });

        // Create the Maker Based on Coordinates Extracted
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(parseFloat(latitude),parseFloat(longitude)),
            map: map
        });
        // Set Zoom
        map.setZoom(18);
        map.panTo(marker.position);
    }

    // console.log("Image Clicked");

    initMap(latitude, longitude);


});

// Get the <span> element that closes the modal
var span = $(".close");

// When the user clicks on <span> (x), close the modal
span.click(function() {
    modal.css("display","none");
});
