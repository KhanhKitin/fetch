"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Users",
      [
        {
          role_id: 1,
          username: 'Hoàng Khánh',
          password: '123456789',
          email: 'hoangkhanh@gmail.com',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          role_id: 2,
          username: 'Phùng Ánh',
          password: 'haha1998',
          email: 'phunganh@gmail.com',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          role_id: 2,
          username: 'Lê Tùng',
          password: 'tunghihi',
          email: 'letung@gmail.com',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Users", null, {});
  }
};
