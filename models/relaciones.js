const { DataTypes, sequelize } = require("../database");
const Proyecto = require("./proyectos.js");
const tarea = require("./tareas");
const user = require("./user");

//Relacion uno a muchos entre el user y las Proyecto
user.hasMany(Proyecto, {
  foreignKey: "userId",
  sourceKey: "id",
});

Proyecto.belongsTo(user, {
  foreignKey: "userId",
  targetKey: "id",
});

//Relacion de uno a muchos entre las Proyecto y las tarea
Proyecto.hasMany(tarea, {
  foreignKey: "ProyectoId",
  sourceKey: "id",
});

tarea.belongsTo(Proyecto, {
  foreignKey: "ProyectoId",
  targetKey: "id",
});

//Creamos las tablas
user.sync({ force: false }).then(() => {
  console.log("Tabla de user creada");

  Proyecto.sync({ force: false }).then(() => {
    console.log("Tabla de proyecto creada");

    tarea.sync({ force: false }).then(() => {
      console.log("Tabla de tarea creada");
    });
  });
});

sequelize.model = { user, Proyecto, tarea };
module.exports = sequelize;
