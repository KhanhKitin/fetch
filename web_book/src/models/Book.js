const Sequelize = require("sequelize");
const sequelize = require("../database/connection");

module.exports = () => {
  const Book = sequelize.define("Books", {
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
    }
  });
  Book.associate = models => {
    Book.belongsToMany(models.User, { through: Love });
    Book.hasMany(models.Comment);
    Book.belongsToMany(models.Order, { through: OrderDetail });
    Book.belongsToMany(models.Cart, { through: CartDetail });
    Book.belongsTo(models.Catalog);
  };
  return Book;
};
