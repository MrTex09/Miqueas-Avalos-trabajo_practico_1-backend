const { DataTypes, sequelize } = require("../database");
const proyecto = require("./proyectos");
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

// Crear tabla si no existe ({force: true} borra y crea la tabla)
tarea.sync({ force: false }).then(() => {
  console.log("Tabla de tareas creada");
});

//relacion
tarea.belongsTo(proyecto);
proyecto.hasMany(tarea);
module.exports = tarea;
