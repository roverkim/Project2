function uploadToFirebase(files) {
    let file = files[0];
    let fileName = file.name;
    if (file) {
        let rootRef = firebase.storage().ref();
        let fileRef = rootRef.child(`images/${fileName}`);
        fileRef.put(file)
            .then(() => {
                console.log("file uploaded with success congrats");
            })
            .catch(err => console.log(err));
        fileRef.getDownloadURL()
            .then((url) => {
                //Getting the download url.
                console.log(`Download Url : ${url}`);
            })
            .catch(err => console.log(err));
    }
 }
