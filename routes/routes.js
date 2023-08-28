const express = require("express");
const {
  validateDescrpcion,
  validateTitulo,
} = require("../validator/proyectoValitor");
const {
  validateDetalle,
  validatedesignacion,
} = require("../validator/tareaValidator");
const {
  validateUserNombre,
  validateUserContraseña,
  validateUserEmail,
} = require("../validator/usuariovalidator");
const { idValidation } = require("../validator/idValidator");
const validator = require("../middleware/errores");
const router = express.Router();

// Importar controladores de usuarios
const {
  crearUser,
  obtenerUsers,
  obtenerUser,
  actualizarUser,
  eliminarUser,
} = require("../controllers/user.controllers");

// Importar controladores de proyectos
const {
  crearProyecto,
  obtenerProyectos,
  obtenerProyecto,
} = require("../controllers/proyecto.controllers");

// Importar controladores de tareas
const {
  crearTarea,
  obtenerTareas,
  obtenerTarea,
} = require("../controllers/tarea.controllers");

// Rutas relacionadas a usuarios
router.post(
  "/usuario",
  validateUserNombre,
  validateUserContraseña,
  validateUserEmail,
  validator,
  crearUser
);

router.get("/usuario/:id", idValidation, validator, obtenerUser);
router.get("/usuario", obtenerUsers);
router.put("/usuario/:id", idValidation, validator, actualizarUser);
router.delete("/Usuario/:id", idValidation, validator, eliminarUser);

// Rutas relacionadas a proyectos
router.post(
  "/proyecto",
  validateDescrpcion,
  validateTitulo,
  validator,
  crearProyecto
);

router.get("/proyecto/:id", idValidation, validator, obtenerProyecto);

router.get("/proyecto", obtenerProyectos);

// Rutas relacionadas a tareas
router.post(
  "/tarea",
  validateDetalle,
  validatedesignacion,
  validator,
  crearTarea
);

router.get("/tarea/:id", idValidation, validator, obtenerTarea);

router.get("/tarea", validator, obtenerTareas);

module.exports = router;
