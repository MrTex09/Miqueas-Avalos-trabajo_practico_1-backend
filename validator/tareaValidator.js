const { body } = require("express-validator");

const validatedesignacion = body("designacion")
  .exists()
  .not()
  .isEmpty()
  .withMessage("El título es obligatorio");
const validateDetalle = body("detalle")
  .exists()
  .not()
  .isEmpty()
  .withMessage("detalle es obligatoria");

module.exports = {
  validateDetalle,
  validatedesignacion,
};
