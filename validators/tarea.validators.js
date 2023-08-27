const { chek } = require("express-validator");
const { validateResult } = require("../helper/validatorHelper");
//TODO:para crear 1 tarea
const validateCreatetarea = [
  //TODO:nombre,descrpcion
  chek("nombre").exists().not().isLength({ min: 3 }).isEmpty(),
  chek("descripcion").exists().not().isEmpty(),
  (req, res, next) => {
    validateResult(req, res, next);
  },
];
//TODO:para obtener un tarea
const validateobternertarea = [
  [
    // Validar el parámetro de consulta 'id'
    query("id").isInt().withMessage("El ID debe ser un número entero"),
  ],
  (req, res, next) => {
    validateResult(req, res, next);
  },
];
//TODO:para obtener tareas
const validateobternerstarea = [
  [
    // Validar el parámetro de consulta 'id'
    query("id").isInt().withMessage("El ID debe ser un número entero"),
  ],
  (req, res, next) => {
    validateResult(req, res, next);
  },
];

//TODO:para  actualizar
const validateEditartarea = [
  [
    // Validar el parámetro de ruta 'id'
    param("id").isInt().withMessage("El ID debe ser un número entero"),
  ],
  (req, res, next) => {
    validateResult(req, res, next);
  },
];
//TODO:para eliminar tareas
const validateEliminartarea = [
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
  validateCreatetarea,
  validateobternertarea,
  validateobternerstarea,
  validateEditartarea,
  validateEliminartarea,
};
