const Sequelize = require("sequelize");

const connection = require("../database");
const Post = connection.define("Post", {
  title: Sequelize.STRING,
  description: Sequelize.STRING
});

module.exports = Post;
