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
const express = require("express");
const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");

// Specify the port.
const port = process.env.PORT || 3000;

// Create an instance of the express app.
const app = express();

// Set Handlebars as the default templating engine.
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));
app.use(express.static("views"));

// Add Additional Functionality to Express Using Middleware body-parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/public", express.static(__dirname + '/public'));


//TEST  Data
const testItems = [
     {
     item: "first test item"
     }
];


// Import routes and kgive the server access to them.
// const routes = require("./controllers/");

const routes = require("./controllers/dropzoneController.js");
app.use("/", routes);

// Listener
// ===========================================================
app.listen(port, function() {
  console.log("App listening on PORT " + port);
});
