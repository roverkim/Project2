// Pull in required dependencies
var express = require('express');
var router = express.Router();

// Import the model (user.js) to use its database functions.
var User = require('../models/user.js');

// prolly gonna have to move this
// router.post("/api/signin", function(req, res) {
//   // TODO: write code that interacts with db
//   console.log(req, res);
// })
