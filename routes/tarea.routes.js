// TODO: Importar controladores de tareas, luego vincular rutas con controladores

const { Router } = require("express");
const router = Router();
const {
  creartarea,
  obtenertareas,
  obtenertarea,
} = require("../controllers/tarea.controllers");
const {
  validateCreatetarea,
  validateobternertarea,
  validateobternerstarea,
} = require("../validators/tareas.validator");

// Crear una tarea
router.post("/tarea", validateCreatetarea, creartarea);
//obtener un usuario
router.get("/tarea/:id", validateobternertarea, obtenertarea);
// Obtener todas las tareas
router.get("/tarea", validateobternerstarea, obtenertareas);

module.exports = router;
