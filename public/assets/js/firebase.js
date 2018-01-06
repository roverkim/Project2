function uploadToFirebase(files) {

  var file = files[0];
  // console.log(file);
  var fileName = file.name;
  if (file) {

    var rootRef = firebase.storage().ref();
    var fileRef = rootRef.child(`images/${fileName}`);

    fileRef.put(file).then(() => {
      console.log("file successfully uploaded!");
    }).catch(err => console.log(err));

    fileRef.getDownloadURL().then((url) => {
      //Getting the download url.
      console.log(`Download Url : ${url}`);


      var img = document.getElementById('image-preview');
      img.src = url;
      console.log("Type of Url " + typeof(url));


      // Submit Upload Button
      $("#SubmitOK").on("click", function() {

        console.log("User ID is " + sessionStorage.getItem("userID"));

        // Get Latitude and Longitude of the Image
        EXIF.getData(file, function() {
          var latitude =  EXIF.getTag(this, "GPSLatitude");
          var longtitude = EXIF.getTag(this, "GPSLongitude");

          var formattedLatitude;


          console.log("Latitude is: " + latitude);
          console.log("Longitude is:" + longtitude);

          // Create Image Object to Send Data to the Back End
            var imageSubmitObject = {
              user_id: sessionStorage.getItem("userID"),
              image_link: url,
              title: $("#imageUploadTitles").val(),
              rating: $(".br-current-rating").text(),
              notes: $("#uploadNotes").val(),
              latitude: null,
              longtitude: null
            };



          console.log("Image Object Is" + JSON.stringify(imageSubmitObject));

          fetch("/api/upload", {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(imageSubmitObject)
          }).then(function(res) {

            if (res.ok) {
              res.json().then(function(message) {
                console.log(JSON.stringify(message));
                console.log("Image Sucessfully Stored in Database");
                location.reload();
              });

            } else {

              console.log("Upload Failed");

            } // End of If Else Statement
          }); // End of Fetch Then

        }); // End of Get Image Meta Data Function


      }); // End of Submit On Click Event Listener

    }).catch(err => console.log(err)); // End of Get URL Download

  } // End of If File Not Empty Truthy
} // End of upload to Firebase Function
