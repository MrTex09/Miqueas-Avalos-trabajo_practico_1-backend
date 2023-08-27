const { chek } = require("express-validator");
const { validateResult } = require("../helper/validatorHelper");
//TODO:para crear 1 proyecto
const validateCreateProyecto = [
  //TODO:nombre,descrpcion
  chek("nombre").exists().not().isLength({ min: 3 }).isEmpty(),
  chek("descripcion").exists().not().isEmpty(),
  (req, res, next) => {
    validateResult(req, res, next);
  },
];
//TODO:para obtener un proyecto
const validateobternerProyecto = [
  [
    // Validar el parámetro de consulta 'id'
    query("id").isInt().withMessage("El ID debe ser un número entero"),
  ],
  (req, res, next) => {
    validateResult(req, res, next);
  },
];
//TODO:para obtener proyectos
const validateobternersProyecto = [
  [
    // Validar el parámetro de consulta 'id'
    query("id").isInt().withMessage("El ID debe ser un número entero"),
  ],
  (req, res, next) => {
    validateResult(req, res, next);
  },
];

//TODO:para  actualizar
const validateEditarProyecto = [
  [
    // Validar el parámetro de ruta 'id'
    param("id").isInt().withMessage("El ID debe ser un número entero"),
  ],
  (req, res, next) => {
    validateResult(req, res, next);
  },
];
//TODO:para eliminar proyectos
const validateEliminarProyecto = [
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
  validateCreateProyecto,
  validateobternerProyecto,
  validateobternersProyecto,
  validateEditarProyecto,
  validateEliminarProyecto,
};
