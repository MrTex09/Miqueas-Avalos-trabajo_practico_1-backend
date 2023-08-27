const { chek } = require("express-validator");
const { validateResult } = require("../helper/validatorHelper");
//TODO:para crear 1 usuario
const validateCreate = [
  //TODO:nombre,email,contraseña
  chek("nombre").exists().not().isLength({ min: 3 }).isEmpty(),
  chek("contraeña").exists().not().isEmpty(),
  chek("email").exists().not().isEmpty().isEmail(),
  (req, res, next) => {
    validateResult(req, res, next);
  },
];
//TODO:para obtener un usuario
const validateobterner = [
  [
    // Validar el parámetro de consulta 'id'
    query("id").isInt().withMessage("El ID debe ser un número entero"),
  ],
  (req, res, next) => {
    validateResult(req, res, next);
  },
];
//TODO:para obtener usuarios
const validateobterners = [
  [
    // Validar el parámetro de consulta 'id'
    query("id").isInt().withMessage("El ID debe ser un número entero"),
  ],
  (req, res, next) => {
    validateResult(req, res, next);
  },
];

//TODO:para  actualizar
const validateEditar = [
  [
    // Validar el parámetro de ruta 'id'
    param("id").isInt().withMessage("El ID debe ser un número entero"),
  ],
  (req, res, next) => {
    validateResult(req, res, next);
  },
];
//TODO:para eliminar usuarios
const validateEliminar = [
  [
    // Validar el parámetro de ruta 'id'
    param("id").isInt().withMessage("El ID debe ser un número entero"),
  ],
  ,
  (req, res, next) => {
    validateResult(req, res, next);
  },
];

module.exports = {
  validateCreate,
  validateobterner,
  validateobterners,
  validateEditar,
  validateEliminar,
};
