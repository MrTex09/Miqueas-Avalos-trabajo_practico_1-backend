const { DataTypes, sequelize } = require("../database");

const Proyecto = sequelize.define("Proyecto", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  titulo: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  descripcion: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
});

module.exports = Proyecto;
