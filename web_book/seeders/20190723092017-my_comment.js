"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Comments",
      [
        {
          user_id: 2,
          book_id: 2,
          content: 'tuyệt vời, truyện rất hay',
          date_create: new Date(),
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          user_id: 2,
          book_id: 1,
          content: 'sách rất ý nghĩa',
          date_create: new Date(),
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Comments", null, {});
  }
};
