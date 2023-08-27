const { chek } = require("express-validator");
const { validateResult } = require("../helper/validatorHelper");
const validateCreate = [
  //TODO:nombre,email,contraseña
  chek("nombre").exists().not().isEmpty(),

  chek("contraeña").exists().not().isEmpty(),

  chek("email").exists().not().isEmpty().isEmail(),
  (req, res, next) => {
    validateResult(req, res, next);
  },
];

module.exports = { validateCreate };
