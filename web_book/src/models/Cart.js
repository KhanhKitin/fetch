const Sequelize = require("sequelize");
const sequelize = require("../database/connection");

module.exports = () => {
  const Cart = sequelize.define("Cart", {
    cart_id: {
      type: Sequelize.INTEGER(11),
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    user_id: {
      type: Sequelize.INTEGER(11),
      references: {
        model: "Users",
        key: "user_id"
      }
    },
    date_create: {
      type: Sequelize.DATE,
      allowNull: false
    },
    total_amount: {
      type: Sequelize.FLOAT,
      allowNull: false
    }
  });

  Cart.associate = models => {
    Cart.belongsTo(models.User);
    Cart.belongsToMany(models.Book, {through: CartDetail});
  }

  return Cart;
}
