const Sequelize = require("sequelize");
const connection = require('../database');

const User = connection.define("User", {
  name: Sequelize.STRING,
  email: Sequelize.STRING,
  password: Sequelize.STRING
});

module.exports = User;
