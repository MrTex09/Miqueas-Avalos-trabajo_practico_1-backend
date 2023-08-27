// TODO: Importar controladores de proyectos, luego vincular rutas con controladores

const express = require("express");
const router = express.Router();
const {
  crearproyecto,
  obtenerproyectos,
  obtenerproyecto,
} = require("../controllers/proyecto.controllers");

// Crear una proyecto
router.post(
  "/proyecto",
  [
    check("nombre").exists().not().isLength({ min: 3 }).isEmpty(),
    check("descripcion").exists().not().isEmpty(),
  ],
  crearproyecto
);
//obtener un usuario
router.get(
  "/proyecto",
  [param("id").isInt().withMessage("ID no válida")],
  obtenerproyecto
);
// Obtener todas las proyectos
router.get(
  "/proyectos",
  [param("id").isInt().withMessage("ID de usuario no válido")],
  obtenerproyectos
);
module.exports = router;
