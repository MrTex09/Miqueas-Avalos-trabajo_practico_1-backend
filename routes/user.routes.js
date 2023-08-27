// TODO: Importar controladores de users, luego vincular rutas con controladores

const { Router } = require("express");
const { body, param } = require("express-validator");
const router = Router();
const {
  crearUser,
  obtenerUsers,
  obtenerUser,
  actualizarUser,
  eliminarUser,
} = require("../controllers/user.controllers");

// Crear una user
router.post(
  "/usuarios",
  [
    body("nombre")
      .exists()
      .not()
      .isLength({ min: 3 })
      .isEmpty()
      .withMessage("El nombre es obligatorio"),
    body("contraseña")
      .exists()
      .not()
      .isLength({ min: 3 })
      .isEmpty()
      .withMessage("La contraseña es obligatoria"),
    body("correo")
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
