const { DataTypes, sequelize } = require("../database");
const proyecto = require("./proyectos");
const tarea = sequelize.define("tareas", {
  nombre: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  decripcion: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
});

// Crear tabla si no existe ({force: true} borra y crea la tabla)
tareas.sync({ force: false }).then(() => {
  console.log("Tabla de tareas creada");
});

//relacion
tareas.belongsto(proyecto);
proyecto.hasmany(tareas);
module.exports = tareas;
