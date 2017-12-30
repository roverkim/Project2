module.exports = function(sequelize, DataTypes) {

  var UserExternalLogin = sequelize.define("user_external_login", {

    id: {
      type: DataTypes.INTEGER ,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },

    user_account_id : {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    external_authentication_provider_id : {
      type: DataTypes.STRING(255),
      allowNull: false,
    },

    external_user_id: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },

    name: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },

    first_name: {
      type: DataTypes.STRING(30)
    },

    last_name: {
      type: DataTypes.STRING(30)
    },

    email:{
      type: DataTypes.STRING(30)
    },

    login_name: {
      type: DataTypes.STRING(30)
    },

    profile_picture: {
      type: DataTypes.TEXT
    }
  });
  return UserExternalLogin;
};
