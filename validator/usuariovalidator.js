const { body } = require("express-validator");

const validateUserNombre = body("nombre")
  .exists()
  .not()
  .isEmpty()
  .withMessage("El nombre es obligatorio");

const validateUserContraseña = body("contraseña")
  .exists()
  .not()
  .isEmpty()
  .withMessage("La contraseña es obligatoria");

const validateUserEmail = body("correo")
  .exists()
  .not()
  .isEmpty()
  .isEmail()
  .withMessage("El correo electrónico no es válido");

module.exports = {
  validateUserNombre,
  validateUserContraseña,
  validateUserEmail,
};
