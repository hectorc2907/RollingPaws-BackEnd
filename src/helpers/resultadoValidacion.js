import { validationResult } from "express-validator";

const resultadoValidacion = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors) {
    return res.status(400).json({
      errores: errors.array(),
    });
  }
  next();
};
