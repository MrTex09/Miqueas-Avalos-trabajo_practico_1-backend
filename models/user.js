const { DataTypes, sequelize } = require("../database");

const user = sequelize.define("usuario", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nombre: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  contraseña: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },

  email: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
});

module.exports = user;
