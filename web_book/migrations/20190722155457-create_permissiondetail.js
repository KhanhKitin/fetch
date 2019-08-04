'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("PermissionDetails", {
      role_id: {
        type: Sequelize.INTEGER(11),
        primaryKey: true,
        references: {
          model: "Roles",
          key: "role_id"
        }
      },
      permission_id: {
        type: Sequelize.INTEGER(11),
        primaryKey: true,
        references: {
          model: "Permissions",
          key: "permission_id"
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
    return queryInterface.dropTable("PermissionDetails");
  }
};
