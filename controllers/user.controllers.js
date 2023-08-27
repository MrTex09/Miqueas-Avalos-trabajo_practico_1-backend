const user = require("../models/user");
const ctrlUser = {};

// Crear
ctrlUser.crearUser = async (req, res) => {
  const { nombre, contraseña, email } = req.body;

  try {
    const newUser = new user({
      nombre,
      contraseña,
      email,
    });

    // Se guarda en la BD
    await newUser.save();

    return res.status(201).json({ message: "usuario creada con éxito" });
  } catch (error) {
    console.log("Error al crear  el usuario", error);
    return res.status(500).json({ message: "Error al crear  al usuario" });
  }
};

ctrlUser.obtenerUsers = async (req, res) => {
  try {
    const users = await user.findAll({
      where: {
        estado: true,
      },
    });

    return res.json(users);
  } catch (error) {
    console.log("Error al obtener los usuarios", error);
    return res.status(500).json({
      message: "Error al obtener los usuarios",
    });
  }
};

ctrlUser.obtenerUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await user.findByPk(id);
    return res.json(user);
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Error al obtener el usuario",
    });
  }
};

// Actualizar
ctrlUser.actualizarUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await user.findByPk(id);
    await user.update(req.body);
    return res.json({
      message: "usuario actualizado exitosamente",
    });
  } catch (error) {
    console.log("Error al actualizar el usuario", error);
    return res.status(500).json({
      message: "Error al actualizar el usuario",
    });
  }
};

// Eliminar un usuario de forma lógica
ctrlUser.eliminarUser = async (req, res) => {
  const { id } = req.params;
  try {
    const usuario = await usuario.findByPk(id);
    await usuario.update({ estado: false });
    return res.json({ message: "el usuario se eliminó correctamente" });
  } catch (error) {
    console.log("Error al eliminar al usuario", error);
    return res.status(500).json({
      message: "Error al eliminar al usuario",
    });
  }
};

module.exports = ctrlUser;
