function uploadToFirebase(files) {

  // Store Uploaded Image in variable file
  var file = files[0];

  var fileName = file.name;

  if (file) {

    var rootRef = firebase.storage().ref();
    var fileRef = rootRef.child(`images/${fileName}`);

    // Set the Source of the Image Preview to be the Link from Firebase
    var img = document.getElementById('image-preview');

    function convertImageBase64(inputFile) { // Function for Base64 Image Conversion

      const temporaryFileReader = new FileReader();

      return new Promise((resolve, reject) => { // Create a new Promise for Base64 Image Conversion
        temporaryFileReader.onerror = () => {
          temporaryFileReader.abort();
          reject(new DOMException("Problem parsing input file.")); // Reject File Promise if Error Occurs
        };

        temporaryFileReader.onload = () => {
          img.src = temporaryFileReader.result; // Set the Image Src to the File Uploaded
          console.log(temporaryFileReader.result);
          resolve(temporaryFileReader.result)
        };
        temporaryFileReader.readAsDataURL(inputFile);
      });
    };

    convertImageBase64(file); // Convert Image to Base64 for File Preview

    // Submit Upload Button that Saves Image to Firebase and Returns Link that gets Saved to the Database

    $("#SubmitOK").on("click", function() {

      // console.log("User ID is " + sessionStorage.getItem("userID"));

      // Retrieve Latitude and Longitude of the Image Uploaded.
      EXIF.getData(file, function() {

        fileRef.put(file).then(() => { // Upload File to Firebase
          console.log("file successfully uploaded!");

          fileRef.getDownloadURL().then((url, error) => { //Get Returned Image URL from Firebase
            if (error)
              alert('Problem With Image Submission. Please Click Submit again.');

            // Extract Meta Data From Image
            var latitude = EXIF.getTag(this, "GPSLatitude");
            var longitude = EXIF.getTag(this, "GPSLongitude");
            var latitudeRef = EXIF.getTag(this, "GPSLatitudeRef");
            var longitudeRef = EXIF.getTag(this, "GPSLongitudeRef");

            console.log(latitude);

            // Format the Raw Long and Lat into Decimal Geo Coordinates
            if (latitude !== undefined) {
              var formattedLatitude = parseFloat(latitude[0]) + (parseFloat(latitude[1]) / 60.00) + (parseFloat(latitude[2]) / 3600.0);
              var formattedLongitude = parseFloat(longitude[0]) + (parseFloat(longitude[1]) / 60.00) + (parseFloat(longitude[2]) / 3600.0);
            } else {
              var formattedLatitude = -41.8781;
              var formattedLongitude = 87.6298;
            }

            if (latitudeRef != "N") {
              formattedLatitude = 0 - formattedLatitude;
            } // End If

            if (longitudeRef != "E") {
              formattedLongitude = 0 - formattedLongitude;
            } // End If

            // Create Image Object to Send Data to the Back End
            var imageSubmitObject = {
              user_id: sessionStorage.getItem("userID"),
              image_link: url,
              title: $("#imageUploadTitles").val(),
              rating: $(".br-current-rating").text(),
              notes: $("#uploadNotes").val(),
              latitude: formattedLatitude,
              longtitude: formattedLongitude
            };

            // Send the Image Object to the Backend for Storage in DB Using Sequelize
            fetch("/api/upload", {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(imageSubmitObject)
            }).then(function(res) {

              if (res.ok) {
                res.json().then(function(message) {
                  console.log("Image Sucessfully Stored in Database");
                  // Refresh the Page When the Image is Sucessfully Uploaded to the Backend
                  location.reload();
                });

              } else {

                console.log("Upload Failed");

              } // End of If Else Statement
            }); // End of Fetch Then

          });
        }).catch(err => console.log(err));
      }); // End of Get Image Meta Data Function
    }); // End of Submit On Click Event Listener
  }; // End of If File Not Empty Truthy
}; // End of upload to Firebase Function
