// Require Packages and Local Files
var path = require("path");
var connection = require('../config/connection.js');
var Sequelize = require('sequelize');

module.exports = function(app) {
  // Require Sequelize Models
  var db = require("../models");
  //Query DB for images based on UserId

  /////////////////////////////////////////////// /* Post Routes */ ////////////////////////////////////////////////////////
  app.post("/api/images", function(req, res) {
    console.log("Images Path hit");

    //Parse data into variables
    var userId = req.body;
    console.log("User ID is " + userId.userID);

    //Pulls Image Info From Database
    db.user_image.findAll({
      where: {
        user_id: userId.userID
      },
     order: [['updatedAt', 'DESC']]
    }).then(function(data){
      // console.log("returns"+ JSON.stringify(data));
      console.log("User Photos Sucessfully Found");
      // Return Images Found Object to the Front ENd
      res.json(data);
    });
  }); // End of Query for Finding Images

  //CREATE NEW IMAGE ROW
  app.post("/api/upload", function(req, res) {
    console.log("Submit Images Path hit");
    // console.log(req.body);

    //Parse data into variables
    var pics = req.body;

    //Creates a Row in the DB for Each New Image
    db.user_image.create({
        user_id: pics.user_id,
        title: pics.title,
        image_link: pics.image_link,
        rating: pics.rating,
        notes: pics.notes,
        latitude: pics.latitude,
        longtitude: pics.longtitude
    }).then(function(data){
      console.log("returns "+ data);
      console.log("User Photo Sucessfully Added to Database");
      res.json(data);
    }); // End Create

  }); // End of Image Post Route

}; // End Export
