const { DataTypes, sequelize } = require("../database");
const user = require("./user");
const proyecto = sequelize.define("proyecto", {
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
proyecto.sync({ force: false }).then(() => {
  console.log("Tabla de proyecto creada");
});

//relacion
proyecto.belongsTo(user);
user.hasMany(proyecto);
module.exports = proyecto;
