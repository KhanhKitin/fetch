"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Catalogs",
      [
        {
          catalog_name: 'Văn Học',
          status: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          catalog_name: 'Thiếu Nhi',
          status: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          catalog_name: 'Khoa Học',
          status: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          catalog_name: 'Kinh Tế',
          status: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          catalog_name: 'Truyện Ngắn',
          status: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Catalogs", null, {});
  }
};
