import { check } from "express-validator";
import resultadoValidacion from "./resultadoValidacion";

const validarTurno = [
  check("nombreMascota")
    .notEmpty()
    .withMessage("La especie es obligatoria")
    .isLength({ min: 2, max: 20 })
    .withMessage("La especie no es correcta"),
  check("nombreVeterinario")
    .notEmpty()
    .withMessage("El nombre del veterinario es obligatorio")
    .isLength({ min: 2, max: 30 })
    .withMessage("El nombre del dueño debe contener entre 2 y 30 caracteres"),
  check("fechaConsulta").notEmpty().withMessage("La fecha es obligatoria"),
  check("horaConsulta").notEmpty().withMessage("La hora es obligatoria"),
  check("detalleConsulta")
    .notEmpty()
    .withMessage("El detalle de la consulta es obligatoria")
    .isLength({ min: 2, max: 5000 })
    .withMessage("El detalle debe contener entre 2 y 5000 caracteres"),
  (req, res, next) => {
    resultadoValidacion(req, res, next);
  },
];

export default validarTurno;