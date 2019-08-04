"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Comments", {
      comment_id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      user_id: {
        type: Sequelize.INTEGER(11),
        references: {
          model: "Users",
          key: "user_id"
        }
      },
      book_id: {
        type: Sequelize.INTEGER(11),
        references: {
          model: "Books",
          key: "book_id"
        }
      },
      content: {
        type: Sequelize.STRING(50),
        allowNull: false
      },
      date_create: {
        type: Sequelize.DATE,
        allowNull: false
      },
      status: {
        type: Sequelize.INTEGER(11),
        allowNull: false
      },
      createdAt: {
        type: Sequelize.DATE
      },
      updatedAt: {
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("Comments");
  }
};
