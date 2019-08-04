const Sequelize = require("sequelize");

const connection = new Sequelize("hoangkhanh", "root", "", {
  host: "127.0.0.1",
  dialect: "mysql",
  operatorsAliases: false
});

module.exports = connection;
