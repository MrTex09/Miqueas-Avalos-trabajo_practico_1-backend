const Tarea = require("../models/tareas");
const ctrlTarea = {};

// Crear un Tareas
ctrlTarea.crearTarea = async (req, res) => {
  try {
    const newTarea = await Tarea.create(req.body);
    res.status(201).json(newTarea);
  } catch (error) {
    console.error("Error al crear el Tareas", error);
    res.status(500).json({ message: "Error al crear el Tareas" });
  }
};

// Obtener todos los Tareass
ctrlTarea.obtenerTareas = async (req, res) => {
  try {
    const tarea = await Tarea.findAll(); // Utiliza 'Tareass' en lugar de 'Tareas' para la variable
    res.json(tarea);
  } catch (error) {
    console.error("Error al obtener los Tareas", error);
    res.status(500).json({ message: "Error al obtener los Tareas" });
  }
};

// Obtener un Tareas por ID
ctrlTarea.obtenerTarea = async (req, res) => {
  try {
    const tarea = await Tarea.findByPk(req.params.id);
    if (tarea) {
      res.json(tarea);
    } else {
      res.status(404).json({ message: "Tareas no encontrado" });
    }
  } catch (error) {
    console.error("Error al obtener el Tareas", error);
    res.status(500).json({ message: "Error al obtener el Tareas" });
  }
};
module.exports = ctrlTarea;
