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
const {
  validateCreate,
  validateobterner,
  validateobterners,
  validateEditar,
  validateEliminar,
} = require("../validators/users.validator");

// Crear una user
router.post("/user", validateCreate, crearUser);
//obtener un usuario
router.get("/user/:id", validateobterner, obtenerUser);
// Obtener todas las users
router.get("/user", validateobterners, obtenerUsers);

// Actualizar una user
router.put("/usuario/:id", validateEditar, actualizarUser);

// Eliminar una user de forma lógica
router.delete("/user/:id", validateEliminar, eliminarUser);

module.exports = router;
