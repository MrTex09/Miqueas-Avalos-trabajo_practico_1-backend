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
router.post(
  "/tarea",
  [
    check("nombre").exists().not().isLength({ min: 3 }).isEmpty(),
    check("descripcion").exists().not().isEmpty(),
  ],
  creartarea
);
//obtener un usuario
router.get(
  "/tarea",
  [param("id").isInt().withMessage("ID no válida")],
  obtenertarea
);
// Obtener todas las tareas
router.get(
  "/tareas",
  [param("id").isInt().withMessage("ID de usuario no válido")],
  obtenertareas
);
module.exports = router;
