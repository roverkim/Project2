// Sets up the Express App
var express = require("express");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");
var app = express();
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
// Serve static content for the app from the "public" directory in the application directory.
// app.use("./public", express.static(__dirname + '/public'));
// app.use("./views", express.static(__dirname + '/views'));


app.use(express.static("public"));
app.use(express.static("views"));

// Routes
// =============================================================
require("./controllers/loginController.js")(app);

// Set Handlebars as the default templating engine.
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


// Requiring our models for syncing
// var db = require("./models");

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
