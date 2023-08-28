const { param } = require("express-validator");
const idValidation = param("id").isInt().withMessage("ID no válido.");

module.exports = { idValidation };
