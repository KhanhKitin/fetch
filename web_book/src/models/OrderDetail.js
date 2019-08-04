const Sequelize = require("sequelize");
const sequelize = require("../database/connection");

module.exports = () => {
  const OrderDetail = sequelize.define("OrderDetail", {
    order_id: {
      type: Sequelize.INTEGER(11),
      primaryKey: true,
      references: {
        model: "Orders",
        key: "order_id"
       }
    },
    book_id: {
      type: Sequelize.INTEGER(11),
      primaryKey: true,
      references: {
        model: "Books",
        key: "book_id"
       }
    },
    quantity: {
      type: Sequelize.INTEGER(11),
      allowNull: false
    },
    amount: {
      type: Sequelize.FLOAT,
      allowNull: false
    }
  });
  return OrderDetail;
};
