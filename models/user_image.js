module.exports = function(sequelize, DataTypes) {
  var UserImage = sequelize.define("user_image", {
    id: {
      type: DataTypes.INTEGER ,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    image_link: {
      type: DataTypes.TEXT
    },
    title: {
      type: DataTypes.TEXT
    },

    rating: {
      type: DataTypes.INTEGER ,
      allowNull: false,
    },

    notes: {
      type: DataTypes.TEXT
    },

    latitude: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    longtitude: {
      type: DataTypes.STRING,
      allowNull: true,
    }
  });
  return UserImage;
};
