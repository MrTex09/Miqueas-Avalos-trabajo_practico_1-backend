// TODO: Importar controladores de users, luego vincular rutas con controladores
const express = require("express");
const router = express.Router();
const { check } = require("express-validator");
//user
const {
  crearUser,
  obtenerUsers,
  obtenerUser,
  actualizarUser,
  eliminarUser,
} = require("../controllers/user.controllers");
//proyecto
const {
  crearProyecto,
  obtenerProyectos,
  obtenerProyecto,
} = require("../controllers/proyecto.controllers");
//tareas
const {
  crearTarea,
  obtenerTareas,
  obtenerTarea,
} = require("../controllers/tarea.controllers");

// Crear una user
router.post(
  "/usuario",
  [
    check("nombre")
      .exists()
      .not()
      .isLength({ min: 3 })
      .isEmpty()
      .withMessage("El nombre es obligatorio"),
    check("contraseña")
      .exists()
      .not()
      .isLength({ min: 3 })
      .isEmpty()
      .withMessage("La contraseña es obligatoria"),
    check("correo")
      .exists()
      .not()
      .isEmpty()
      .isEmail()
      .withMessage("El correo electrónico que se ingreso no es válido"),
  ],
  crearUser
);
//obtener un usuario
router.get(
  "/usuario/:id",
  [
    // Validar el parámetro de ruta 'id'
    check("id").isInt().withMessage("El ID debe ser un número entero"),
  ],
  (req, res, next) => {
    validateResult(req, res, next);
  },
  obtenerUser
);
// Obtener todas las users
router.get(
  "/ususarios",
  [
    // Validar el parámetro de ruta 'id'
    check("id").isInt().withMessage("El ID debe ser un número entero"),
  ],
  (req, res, next) => {
    validateResult(req, res, next);
  },
  obtenerUsers
);
// Actualizar una user
router.put(
  "/usuario/:id",
  [
    // Validar el parámetro de ruta 'id'
    check("id").isInt().withMessage("El ID debe ser un número entero"),
  ],
  (req, res, next) => {
    validateResult(req, res, next);
  },
  actualizarUser
);
// Eliminar una user de forma lógica
router.delete(
  "/usuario/:id",
  [
    // Validar el parámetro de ruta 'id'
    check("id").isInt().withMessage("El ID debe ser un número entero"),
  ],
  (req, res, next) => {
    validateResult(req, res, next);
  },
  eliminarUser
);

//proyecto
// Crear una proyecto
router.post("/proyecto", crearProyecto, [
  check("titulo").exists().not().isLength({ min: 3 }).isEmpty(),
]);
//obtener un usuario
router.get(
  "/proyecto",
  [check("id").isInt().withMessage("ID no válida")],
  obtenerProyecto
);
// Obtener todas las proyectos
router.get(
  "/proyectos",
  [check("id").isInt().withMessage("ID de usuario no válido")],
  obtenerProyectos
);

//tareas
// Crear una tarea
router.post("/tarea", crearTarea, [
  check("designacion").exists().not().isLength({ min: 3 }).isEmpty(),
]);
//obtener un usuario
router.get(
  "/tarea",
  [check("id").isInt().withMessage("ID no válida")],
  obtenerTarea
);
// Obtener todas las tareas
router.get(
  "/tareas",
  [check("id").isInt().withMessage("ID de usuario no válido")],
  obtenerTareas
);
module.exports = router;
