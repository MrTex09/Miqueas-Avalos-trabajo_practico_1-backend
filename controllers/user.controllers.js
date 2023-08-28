const User = require("../models/user"); // Utiliza 'User' en lugar de 'user' para la clase/modelo
const ctrlUser = {};

// Crear un usuario
ctrlUser.crearUser = async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    res.status(201).json(newUser);
  } catch (error) {
    console.error("Error al crear el usuario", error);
    res.status(500).json({ message: "Error al crear el usuario" });
  }
};

// Obtener todos los usuarios
ctrlUser.obtenerUsers = async (req, res) => {
  try {
    const user = await User.findAll(); // Utiliza 'users' en lugar de 'user' para la variable
    res.json(user);
  } catch (error) {
    console.error("Error al obtener los usuarios", error);
    res.status(500).json({ message: "Error al obtener los usuarios" });
  }
};

// Obtener un usuario por ID
ctrlUser.obtenerUser = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ message: "Usuario no encontrado" });
    }
  } catch (error) {
    console.error("Error al obtener el usuario", error);
    res.status(500).json({ message: "Error al obtener el usuario" });
  }
};

// Actualizar un usuario por ID
ctrlUser.actualizarUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findByPk(id);
    if (user) {
      await user.update(req.body);
      res.json({ message: "Usuario actualizado exitosamente" });
    } else {
      res.status(404).json({ message: "Usuario no encontrado" });
    }
  } catch (error) {
    console.error("Error al actualizar el usuario", error);
    res.status(500).json({ message: "Error al actualizar el usuario" });
  }
};

// Eliminar un usuario de forma lógica por ID
ctrlUser.eliminarUser = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findByPk(id);
    if (user) {
      await user.destroy();
      res.json({ message: "El usuario se eliminó correctamente" });
    } else {
      res.status(404).json({ message: "Usuario no encontrado" });
    }
  } catch (error) {
    console.error("Error al eliminar al usuario", error);
    res.status(500).json({ message: "Error al eliminar al usuario" });
  }
};

module.exports = ctrlUser;
