module.exports = function(sequelize, DataTypes) {
  var UserImage = sequelize.define("user_image", {
    user_id: DataTypes.INTEGER,
    image_link: DataTypes.CHAR,
    rating: DataTypes.INTEGER,
    notes: DataTypes.TEXT
  });
  return UserImage;
};
