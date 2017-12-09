// // Use the environment variable or use a given port
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
var express = require("express");
var exphbs = require("express-handlebars");

// Create an instance of the express app.
var app = express();

// Specify the port.
const port = process.env.PORT || 3000;

// Set Handlebars as the default templating engine.
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


//TEST  Data
var testItems = [
     {
     item: "first test item"
     }
];


// Routes
app.get("/index", function(req, res) {
  res.render("index", testItems[0]);
});

// Listener
// ===========================================================
app.listen(port, function() {
  console.log("App listening on PORT " + port);
});
