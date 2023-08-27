// TODO: Importar controladores de tareas, luego vincular rutas con controladores

const express = require("express");
const router = express.Router();
const {
  creartarea,
  obtenertareas,
  obtenertarea,
} = require("../controllers/tarea.controllers");
const { validateCreatetarea } = require("../validators/tarea.validators");

// Crear una tarea
router.post("/tarea", validateCreatetarea, creartarea);
//obtener un usuario
router.get("/tarea", obtenertarea);
// Obtener todas las tareas
router.get("/tareas", obtenertareas);
module.exports = router;
