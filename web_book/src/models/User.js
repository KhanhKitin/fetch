const Sequelize = require("sequelize");
const sequelize = require("../database/connection");

// const models = require('../models');

module.exports = () => {
  const User = sequelize.define("Users", {
    user_id: {
      type: Sequelize.INTEGER(11),
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    role_id: {
      type: Sequelize.INTEGER(11),
      references: {
        model: "Roles",
        key: "role_id"
      }
    },
    username: {
      type: Sequelize.STRING(35),
      allowNull: false
    },
    password: {
      type: Sequelize.STRING(100),
      allowNull: false
    },
    email: {
      type: Sequelize.STRING(35),
      allowNull: false,
      validate: {
        isEmail: true
      }
    }
  });

  User.associate = models => {
    User.belongsToMany(models.Book, { through: Love });
    User.hasMany(models.Comment);
  };

  return User;
};
