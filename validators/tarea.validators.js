const { check } = require("express-validator");
const { validateResult } = require("../helper/validatorHelper");
//TODO:para crear 1 tarea
const validateCreatetarea = [
  //TODO:nombre,descrpcion
  check("nombre").exists().not().isLength({ min: 3 }).isEmpty(),
  check("descripcion").exists().not().isEmpty(),
  (req, res, next) => {
    validateResult(req, res, next);
  },
];
module.exports = {
  validateCreatetarea,
};
