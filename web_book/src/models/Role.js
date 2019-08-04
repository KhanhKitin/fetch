const Sequelize = require("sequelize");
const sequelize = require("../database/connection");

module.exports = () => {
  const Role = sequelize.define("Role", {
    role_id: {
      type: Sequelize.INTEGER(11),
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    role_name: {
      type: Sequelize.STRING(50),
      allowNull: false
    }
  });

  Role.associate = models => {
    Role.hasMany(models.User);
    Role.belongsToMany(models.Permission, {through: PermissionDetail});
  };

  return Role;
};

