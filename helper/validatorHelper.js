const { validationResult } = require("express-validator");
const validateResult = (req, res, next) => {
  try {
    validateResult(req).throw();
    return next();
  } catch (err) {
    res.status(404);
    res.send({ errors: err.array() });
  }
};
module = { validateResult };
