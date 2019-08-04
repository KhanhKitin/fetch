const Sequelize = require("sequelize");
const sequelize = require("../database/connection");

module.exports = () => {
  const Permission = sequelize.define("Permission", {
    permission_id: {
      type: Sequelize.INTEGER(11),
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    type_permission: {
      type: Sequelize.STRING(50),
      allowNull: false
    }
  });

  Permission.associate = models => {
    Permission.belongsToMany(models.Role, {through: PermissionDetail});
  };

  return Permission;
};

