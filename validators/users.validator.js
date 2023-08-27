const { check } = require("express-validator");
const { validateResult } = require("../helper/validatorHelper");
//TODO:para crear 1 usuario
const validateCreate = [
  //TODO:nombre,email,contraseña
  check("nombre").exists().not().isLength({ min: 3 }).isEmpty(),
  check("contraeña").exists().not().isEmpty(),
  check("email").exists().not().isEmpty().isEmail(),
  (req, res, next) => {
    validateResult(req, res, next);
  },
];

module.exports = {
  validateCreate,
};
