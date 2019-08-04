"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Permissions",
      [
        {
          type_permission: "Post Book",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          type_permission: "Delete Book",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          type_permission: "Update Book",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          type_permission: "Show Book",
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Permissions", null, {});
  }
};
