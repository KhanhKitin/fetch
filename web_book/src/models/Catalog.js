const Sequelize = require("sequelize");
const sequelize = require("../database/connection");

module.exports = () => {
  const Catalog = sequelize.define("Catalogs", {
    catalog_id: {
      type: Sequelize.INTEGER(11),
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    catalog_name: {
      type: Sequelize.STRING(50),
      allowNull: false
    },
    status: {
      type: Sequelize.INTEGER(11),
      allowNull: false
    }
  });

  Catalog.associate = models => {
    Catalog.hasMany(models.Book);
  };

  return Catalog;
};
