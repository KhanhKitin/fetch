'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Loves", {
      user_id: {
        type: Sequelize.INTEGER(11),
        primaryKey: true,
        references: {
          model: "Users",
          key: "user_id"
         }
      },
      book_id: {
        type: Sequelize.INTEGER(11),
        primaryKey: true,
        references: {
          model: "Books",
          key: "book_id"
         }
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
    return queryInterface.dropTable("Loves");
  }
};
