var path = require("path");
var connection = require('../config/connection.js');
var Sequelize = require('sequelize');

// Require Sequelize Models
var db = require("../models");
//query DB for images based on UserId
app.post("/api/images", function(req, res) {
  console.log("Images Path hit");
  console.log(req.body);
  //Parse data into variables
  var userId = req.body;
  //pulls image info from database
  db.user_image.findAll({
    where: {
      user_id: userId}
  }).then(function(data){
    console.log("returns"+ data);
    console.log("User Photos Sucessfully Found");
    res.json(data);
  });
});

//CREATE NEW IMAGE ROW
app.post("/api/??", function(req, res) {
  console.log("Images Path hit");
  console.log(req.body);
  //Parse data into variables
  var pics = req.body;
  //creates a row in the DB
  db.user_image.create({
      user_id: pics.userId,
      image_link: pics.image,
      rating: pics.rating,
      notes: pics.notes,
  }).then(function(data){
    console.log("returns "+ data);
    console.log("User Photo Sucessfully Added to Database");
    res.send('confirmed');
  });

});
