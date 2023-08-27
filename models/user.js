const { DataTypes, sequelize } = require("../database");

const usuario = sequelize.define("usuario", {
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

// Crear tabla si no existe ({force: true} borra y crea la tabla)
user.sync({ force: false }).then(() => {
  console.log("Tabla de usuarios creada");
});

module.exports = user;
