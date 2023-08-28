const { DataTypes, sequelize } = require("../database");
const tarea = sequelize.define("tareas", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  designacion: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  detalle: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
});

module.exports = tarea;
