var path = require("path");
var connection = require('../config/connection.js');
var Sequelize = require('sequelize');

// Require Sequelize Models
var db = require("../models");



module.exports = function(app) {

  /////////////////////////////////////////////// /* Get Routes */ ////////////////////////////////////////////////////////
  app.get("/", function(req,res){
      console.log("Root Path Hit");
      res.sendFile(path.join(__dirname, "../public/index.html"));
  }); // End of Root Get



  app.get("/:path", function(req,res){

    // Store Current Path
    var currentPath = req.params.path;
    console.log("current path is " + currentPath);

    // Switch Statement for Get Paths
    switch(currentPath){
      case "timeline":
        console.log("Sending TimeLine URL");
        res.send("/timeline.html");
        break;
      case "timeline.html":
        console.log("Time Line Path Hit");
        res.sendFile(path.join(__dirname, "../public/timeline.html"));
        break;
      // Default for all Invalid Paths is the homepage
      default:
        console.log("Root Path Hit");
        res.sendFile(path.join(__dirname, "../public/index.html"));
        break;
    } // End Switch

  });

  /////////////////////////////////////////////// /* Post Routes*/ ////////////////////////////////////////////////////////

  // Login Page //
  app.post("/api/signin", function(req, res) {

    console.log("Sign in Path hit");
    console.log(req.body);

    //Parse data into variables
    var user = req.body;

    //Store User Google Details in database if User does not Exists.
    db.user_external_login.findCreateFind({
      where: {
        external_authentication_provider_id: user.externalAuthenticationProviderId,
      },
      defaults: {
        id: null,
        user_account_id: user.externalAuthenticationProviderId,
        external_authentication_provider_id: user.externalAuthenticationProviderId,
        external_user_id: user.externalAuthenticationProviderId,
        name: user.name,
        first_name: user.firstName,
        last_name: user.lastName,
        email: user.email,
        login_name: null,
        profile_picture: user.profilePicture

      }
    }).then(function(data){
      console.log("returns "+ data);
      // Sends Back Google User ID to the Login Page for Storage in Session Storage.
      console.log("User Data Sucessfully Added to Database");
      res.json(user.externalAuthenticationProviderId);
    }); // End of DB Query

  }); // End of Login Post

  // Timeline Page //
  app.post("/api/ID", function(req, res) {

    console.log("ID Path hit");

    //Parse data into variables
    var getUserID = req.body;

    console.log("SessionID is: "+ getUserID.sessionID);

    db.user_external_login.find({
      where: {
        external_authentication_provider_id: getUserID.sessionID.replace(/["']/g, "")
      }
    }).then(function(data){
      console.log("Return User Data is:"+ JSON.stringify(data));
      // Sends Back Google User ID to the Login Page for Storage in Session Storage.
      console.log("Sucessfully Retrieved User Data");
      // console.log(data[0]);
      res.json(JSON.stringify(data));
    }); // End of DB Query
  }); // End of ID Post



}; // End of Module Exports
