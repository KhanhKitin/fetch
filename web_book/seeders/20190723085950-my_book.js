"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Books",
      [
        {
          catalog_id: 1,
          book_name: "Nhà Giả Kim",
          author: "Paulo Coelho",
          price: 86000,
          description:
            "Tất cả những trải nghiệm trong chuyến phiêu du theo đuổi vận mệnh của mình",
          quantity: 29,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          catalog_id: 5,
          book_name: "Tôi Thấy Hoa Vàng Trên Cỏ Xanh",
          author: "Nguyễn Nhật Ánh",
          price: 112000,
          description:
            "Ta bắt gặp trong Tôi Thấy Hoa Vàng Trên Cỏ Xanh một thế giới đấy bất ngờ và thi vị",
          quantity: 100,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Books", null, {});
  }
};
