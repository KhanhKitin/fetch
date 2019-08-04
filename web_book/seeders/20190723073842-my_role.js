"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Roles",
      [
        {
          role_name: "admin",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          role_name: "customer",
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Roles", null, {});
  }
};
