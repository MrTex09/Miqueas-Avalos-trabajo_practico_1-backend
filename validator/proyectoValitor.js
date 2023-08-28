const { body } = require("express-validator");

const validateTitulo = body("titulo")
  .exists()
  .not()
  .isEmpty()
  .withMessage("El título es obligatorio");
const validateDescrpcion = body("descripcion")
  .exists()
  .not()
  .isEmpty()
  .withMessage("La descripción es obligatoria");

module.exports = {
  validateDescrpcion,
  validateTitulo,
};
