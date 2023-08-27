// TODO: Importar controladores de users, luego vincular rutas con controladores

const { Router } = require("express");
const { body, param } = require("express-validator");
const { validateResult } = require("../helper/validatorHelper");
const router = Router();
const {
  crearUser,
  obtenerUsers,
  obtenerUser,
  actualizarUser,
  eliminarUser,
} = require("../controllers/user.controllers");
const { validateCreate } = require("../validators/users.validator");

// Crear una user
router.post("/user", validateCreate, crearUser);
//obtener un usuario
router.get(
  "/user/:id",
  [
    // Validar el parámetro de ruta 'id'
    param("id").isInt().withMessage("El ID debe ser un número entero"),
  ],
  (req, res, next) => {
    validateResult(req, res, next);
  },
  obtenerUser
);
// Obtener todas las users
router.get(
  "/user",
  [
    // Validar el parámetro de ruta 'id'
    param("id").isInt().withMessage("El ID debe ser un número entero"),
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
    param("id").isInt().withMessage("El ID debe ser un número entero"),
  ],
  (req, res, next) => {
    validateResult(req, res, next);
  },
  actualizarUser
);

// Eliminar una user de forma lógica
router.delete(
  "/user/:id",
  [
    // Validar el parámetro de ruta 'id'
    param("id").isInt().withMessage("El ID debe ser un número entero"),
  ],
  (req, res, next) => {
    validateResult(req, res, next);
  },
  eliminarUser
);

module.exports = router;
