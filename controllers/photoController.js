var path = require("path");
var connection = require('../config/connection.js');
var Sequelize = require('sequelize');

module.exports = function(app) {
  // Require Sequelize Models
  var db = require("../models");
  //query DB for images based on UserId
  app.post("/api/images", function(req, res) {
    console.log("Images Path hit");

    //Parse data into variables
    var userId = req.body;
    console.log("User ID is " + userId.userID);

    //pulls image info from database
    db.user_image.findAll({
      where: {
        user_id: userId.userID
      },
     order: [['updatedAt', 'DESC']]
    }).then(function(data){
      console.log("returns"+ JSON.stringify(data));
      console.log("User Photos Sucessfully Found");
      res.json(data);
    });
  });

  //CREATE NEW IMAGE ROW
  app.post("/api/upload", function(req, res) {
    console.log("Submit Images Path hit");
    console.log(req.body);
    //Parse data into variables
    var pics = req.body;
    //creates a row in the DB

    db.user_image.create({
        user_id: pics.user_id,
        title: pics.title,
        image_link: pics.image_link,
        rating: pics.rating,
        notes: pics.notes,
    }).then(function(data){
      console.log("returns "+ data);
      console.log("User Photo Sucessfully Added to Database");
      res.json(data);
    });

  });
};
