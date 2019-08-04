'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("CartDetails", {
      cart_id: {
        type: Sequelize.INTEGER(11),
        primaryKey: true,
        references: {
          model: "Carts",
          key: "cart_id"
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
      quantity: {
        type: Sequelize.INTEGER(11),
        allowNull: false
      },
      amount: {
        type: Sequelize.FLOAT,
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
    return queryInterface.dropTable("CartDetails");
  }
};
