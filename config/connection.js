// Pull in required dependencies
var mysql = require('mysql');

// Create the MySQL connection object
var connection;

if (process.env.JAWSDB_URL) {
// DB is JawsDB on Heroku
connection = mysql.createConnection(process.env.JAWSDB_URL);
      } else {
// DB is local on localhost
          connection = mysql.createConnection({
          port: 3306,
          host: 'gk90usy5ik2otcvi.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
          user: 'k44glo6u371o50eg',
          password: 'r3gzdfcbsnwesjcd',
          database: 'bpu19iau6iiinpq5'
        })
};

// Make the connection to MySQL
connection.connect(function(err) {
  if (err) {
    console.error('ERROR: MySQL connection error -- ' + err.stack + '\n\n');
    return;
  }
  console.log('Connected to MySQL database as id ' + connection.threadId + '\n\n');
});

// Export connection for ORM use
module.exports = connection;
