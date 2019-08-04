'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Books", {
      book_id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      catalog_id: {
        type: Sequelize.INTEGER(11),
        references: {
         model: "Catalogs",
         key: "catalog_id"
        }
       },
      book_name: {
        type: Sequelize.STRING(100),
        allowNull: false
      },
      author: {
        type: Sequelize.STRING(50),
        allowNull: false
      },
      price: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      description: {
        type: Sequelize.STRING(100),
        allowNull: false
      },
      image: {
        type: Sequelize.STRING(100),
        allowNull: false
      },
      quantity: {
        type: Sequelize.INTEGER(11),
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
    return queryInterface.dropTable("Books");
   }
};
