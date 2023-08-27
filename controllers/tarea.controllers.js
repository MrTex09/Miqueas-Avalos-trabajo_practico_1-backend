const tarea = require("../models/tareas");
const ctrltarea = {};

// Crear
ctrltarea.creartarea = async (req, res) => {
  const { nombre, descripcion } = req.body;

  try {
    const newtarea = new tarea({
      nombre,
      descripcion,
    });

    // Se guarda en la BD
    await newtarea.save();

    return res.status(201).json({ message: "tarea creada con éxito" });
  } catch (error) {
    console.log("Error al crear  el tarea", error);
    return res.status(500).json({ message: "Error al crear  al tarea" });
  }
};
// obtener varias
ctrltarea.obtenertareas = async (req, res) => {
  try {
    const tareas = await tarea.findAll({
      where: {
        estado: true,
      },
    });

    return res.json(tareas);
  } catch (error) {
    console.log("Error al obtener los tareas", error);
    return res.status(500).json({
      message: "Error al obtener los tareas",
    });
  }
};
//obter una
ctrltarea.obtenertarea = async (req, res) => {
  try {
    const { id } = req.params;
    const tarea = await tarea.findByPk(id);
    return res.json(tarea);
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Error al obtener el tarea",
    });
  }
};

module.exports = ctrltarea;
