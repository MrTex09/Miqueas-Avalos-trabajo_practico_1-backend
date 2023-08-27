const Proyecto = require("../models/proyectos");
const ctrlProyecto = {};

// Crear
ctrlProyecto.crearProyecto = async (req, res) => {
  const { nombre, descripcion } = req.body;

  try {
    const newProyecto = new Proyecto({
      nombre,
      descripcion,
    });

    // Se guarda en la BD
    await newProyecto.save();

    return res.status(201).json({ message: "Proyecto creada con éxito" });
  } catch (error) {
    console.log("Error al crear  el Proyecto", error);
    return res.status(500).json({ message: "Error al crear  al Proyecto" });
  }
};
// obtener varias
ctrl.obtenerProyectos = async (req, res) => {
  try {
    const Proyectos = await Proyecto.findAll({
      where: {
        estado: true,
      },
    });

    return res.json(Proyectos);
  } catch (error) {
    console.log("Error al obtener los Proyectos", error);
    return res.status(500).json({
      message: "Error al obtener los Proyectos",
    });
  }
};
//obter una
ctrl.obtenerProyecto = async (req, res) => {
  try {
    const { id } = req.params;
    const Proyecto = await Proyecto.findByPk(id);
    return res.json(Proyecto);
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Error al obtener el Proyecto",
    });
  }
};

module.exports = ctrlProyecto;
