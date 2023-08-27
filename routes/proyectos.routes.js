// TODO: Importar controladores de proyectos, luego vincular rutas con controladores

const { Router } = require("express");
const router = Router();
const {
  crearproyecto,
  obtenerproyectos,
  obtenerproyecto,
} = require("../controllers/proyecto.controllers");
const {
  validateCreateProyecto,
  validateobternerProyecto,
  validateobternersProyecto,
} = require("../validators/proyectos.validator");

// Crear una proyecto
router.post("/proyecto", validateCreateProyecto, crearproyecto);
//obtener un usuario
router.get("/proyecto/:id", validateobternerProyecto, obtenerproyecto);
// Obtener todas las proyectos
router.get("/proyecto", validateobternersProyecto, obtenerproyectos);

module.exports = router;
