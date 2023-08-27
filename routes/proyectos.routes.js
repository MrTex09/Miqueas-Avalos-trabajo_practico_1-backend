// TODO: Importar controladores de proyectos, luego vincular rutas con controladores

const express = require("express");
const router = express.Router();
const {
  crearProyecto,
  obtenerProyectos,
  obtenerProyecto,
} = require("../controllers/proyecto.controllers");
const { validateCreateProyecto } = require("../validators/proyectos.validator");

// Crear una proyecto
router.post("/proyecto", validateCreateProyecto, crearProyecto);
//obtener un usuario
router.get("/Proyecto", obtenerProyecto);
// Obtener todas las Proyectos
router.get("/Proyectos", obtenerProyectos);
module.exports = router;
