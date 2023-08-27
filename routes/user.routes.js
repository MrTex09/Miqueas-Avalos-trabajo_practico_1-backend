// TODO: Importar controladores de reservas, luego vincular rutas con controladores

const { Router } = require("express");
const { body, param } = require("express-validator");
const router = Router();
const { validateCreate } = require("../validators/users.validator");
const {
  renderListaReservas,
  renderFormNuevaReserva,
  renderFormEditarReserva,
  obtenerReservas, // Obtener todas
  obtenerReserva, // Obtener un única reserva
  crearReserva,
  actualizarReserva,
  eliminarReserva,
} = require("../controllers/user.controllers");
const { validateCreate } = require("../validators/users.validator");

// ==========================================
//         Rutas para renderizar vistas
// ==========================================

// Obtener todas las reservas localhost:4002/
router.get("/", renderListaReservas);

// Formulario para crear una reserva
router.get("/crearReserva", renderFormNuevaReserva);

// ==========================================
//         Rutas para CRUD de reservas
// ==========================================

// Obtener todas las reservas
router.get("/api", obtenerReservas);

// Crear una reserva
router.post("/api", crearReserva);

router.get("/api/:id", obtenerReserva);

// Actualizar una reserva
router.put("/api/:id", actualizarReserva);

// Eliminar una reserva de forma lógica
router.delete("/api/:id", eliminarReserva);

// Formulario para actualizar una reserva
router.get("/actualizarReserva/:id", renderFormEditarReserva); // para capturar :id -> req.params.id

module.exports = router;
