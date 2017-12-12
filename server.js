<<<<<<< HEAD
// var GoogleAuth = require('google-auth-library');
// var auth = new GoogleAuth;
//
// //verify users id "token"
// var client = new auth.OAuth2(CLIENT_ID, '', '');
// client.verifyIdToken(
//     token,
//     150322396474-ca8vpst9j52tr5eaat191qj3d03tbej3.apps.googleusercontent.com,
//     function(e, login) {
//       var payload = login.getPayload();
//       var userid = payload['sub'];
//     });


  // Sets up the Express App
  var express = require("express");
  var bodyParser = require("body-parser");
  var app = express();
  var PORT = process.env.PORT || 8080;

  // Requiring our models for syncing
  // var db = require("./models");

  // Sets up the Express app to handle data parsing
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.text());
  app.use(bodyParser.json({ type: "application/vnd.api+json" }));

  // Static directory
  // app.use(express.static("public"));

  // Routes
  // =============================================================
  require("./controllers/loginController.js")(app);
  //const routes = require("./controllers/dropzoneController.js");
  //app.use("/", routes);
  // require("./routes/x-routes.js")(app);

  // Syncing our sequelize models and then starting our Express app
  // =============================================================
  // db.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });


  // });
=======
// // Use the environment constiable or use a given port
// const PORT = process.env.PORT || 8080;
//
// // Create a server, uses `handleRequest` which is function that takes
// // care of providing requested data
// const server = http.createServer(handleRequest);
//
// // Start the server
// server.listen(PORT, () => {
//   console.log('Server listening on: http://localhost:%s', PORT);
// });
//
// Dependencies


// Set Handlebars as the default templating engine.
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));
app.use(express.static("views"));

// Add Additional Functionality to Express Using Middleware body-parser



//TEST  Data
const testItems = [
     {
     item: "first test item"
     }
];


// Import routes and kgive the server access to them.
// const routes = require("./controllers/");




// Listener
// ===========================================================
app.listen(port, function() {
  console.log("App listening on PORT " + port);
});
>>>>>>> upstream/master
