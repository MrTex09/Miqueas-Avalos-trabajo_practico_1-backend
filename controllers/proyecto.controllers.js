const Proyecto = require("../models/proyectos");
const ctrlProyecto = {};

// Crear un Proyectos
ctrlProyecto.crearProyecto = async (req, res) => {
  try {
    const newProyecto = await Proyecto.create(req.body);
    res.status(201).json(newProyecto);
  } catch (error) {
    console.error("Error al crear el Proyectos", error);
    res.status(500).json({ message: "Error al crear el Proyectos" });
  }
};

// Obtener todos los Proyectoss
ctrlProyecto.obtenerProyectos = async (req, res) => {
  try {
    const proyecto = await Proyecto.findAll(); // Utiliza 'Proyectoss' en lugar de 'Proyectos' para la variable
    res.json(proyecto);
  } catch (error) {
    console.error("Error al obtener los Proyectos", error);
    res.status(500).json({ message: "Error al obtener los Proyectos" });
  }
};

// Obtener un Proyectos por ID
ctrlProyecto.obtenerProyecto = async (req, res) => {
  try {
    const proyecto = await Proyecto.findByPk(req.params.id);
    if (proyecto) {
      res.json(proyecto);
    } else {
      res.status(404).json({ message: "Proyectos no encontrado" });
    }
  } catch (error) {
    console.error("Error al obtener el Proyectos", error);
    res.status(500).json({ message: "Error al obtener el Proyectos" });
  }
};
module.exports = ctrlProyecto;
