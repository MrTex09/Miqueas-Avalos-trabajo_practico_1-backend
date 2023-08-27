const tarea = require("../models/tareas");
const ctrltarea = {};

// Crear
ctrltarea.crearTarea = async (req, res) => {
  const { designacion, detalle } = req.body;

  try {
    const newTarea = new Tarea({
      id,
      designacion,
      detalle,
    });

    // Se guarda en la BD
    await newTarea.save();

    return res.status(201).json({ message: "tarea creada con éxito" });
  } catch (error) {
    console.log("Error al crear  el tarea", error);
    return res.status(500).json({ message: "Error al crear  al tarea" });
  }
};
// obtener varias
ctrltarea.obtenerTareas = async (req, res) => {
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
ctrltarea.obtenerTarea = async (req, res) => {
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
