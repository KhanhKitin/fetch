"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Orderdetails",
      [
        {
          order_id: 1,
          book_id: 1,
          quantity: 1,
          amount: 68000,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          order_id: 1,
          book_id: 2,
          quantity: 1,
          amount: 112000,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Orderdetails", null, {});
  }
};
