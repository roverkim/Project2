
var Sequelize = require('sequelize');



var sequelize = new Sequelize('bpu19iau6iiinpq5', 'k44glo6u371o50eg', 'r3gzdfcbsnwesjcd', {
  dialect: 'mysql'
  host: 'gk90usy5ik2otcvi.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
  port: 3306,
})



Object.keys(db).forEach(function(modelName) {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});


db.Sequelize = Sequelize;

module.exports = db;
