const Sequelize = require("sequelize");
const sequelize = require("../database/connection");

module.exports = () => {
  const PermissionDetail = sequelize.define("PermissionDetail", {
    role_id: {
      type: Sequelize.INTEGER(11),
      primaryKey: true,
      references: {
        model: "Roles",
        key: "role_id"
      }
    },
    permission_id: {
      type: Sequelize.INTEGER(11),
      primaryKey: true,
      references: {
        model: "Permissions",
        key: "permission_id"
      }
    }
  });
 
  return PermissionDetail;
};
