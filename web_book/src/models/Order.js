const Sequelize = require("sequelize");
const sequelize = require("../database/connection");

module.exports = () => {
  const Order = sequelize.define("Order", {
    order_id: {
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
    total_amount: {
      type: Sequelize.FLOAT,
      allowNull: false
    },
    date_create: {
      type: Sequelize.DATE,
      allowNull: false
    },
    status: {
      type: Sequelize.INTEGER(11),
      allowNull: false,
    }
  });

  Order.associate = models => {
    Order.belongsTo(models.User);
    Order.belongsToMany(models.Book, {through: OrderDetail});
  };

  return Order;
};

