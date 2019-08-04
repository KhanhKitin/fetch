"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Cartdetails",
      [
        {
          cart_id: 1,
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
    return queryInterface.bulkDelete("Cartdetails", null, {});
  }
};
