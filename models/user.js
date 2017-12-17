// Import the ORM to implement functions that will interact with the database
var orm = require('../config/orm.js');

// Create the burger object
var user = {
  // Select all user table entries
  selectAll: function(cb) {
    orm.selectAll('users', function(res) {
      cb(res);
    });
  },

  // The variables cols and vals are arrays
  insertOne: function(cols, vals, cb) {
    orm.insertOne('users', cols, vals, function(res) {
      cb(res);
    });
  },

  // The objColVals is an object specifying columns as object keys with associated values
  updateOne: function(objColVals, condition, cb) {
    orm.updateOne('users', objColVals, condition, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (userController.js).
module.exports = user;
