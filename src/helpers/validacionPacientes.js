import { check } from "express-validator";
import resultadoValidacion from "./resultadoValidacion";

const validarPaciente = [
  check("nombreDuenio")
    .notEmpty()
    .withMessage("El nombre del dueño es obligatorio")
    .isLength({ min: 2, max: 30 })
    .withMessage("El nombre del dueño debe contener entre 2 y 30 caracteres"),
  check("apellidoDuenio")
    .notEmpty()
    .withMessage("El apellido del dueño es obligatorio")
    .isLength({ min: 2, max: 30 })
    .withMessage("El apellido del dueño debe contener entre 2 y 30 caracteres"),
  check("emailDuenio")
    .notEmpty()
    .withMessage("El correo electronico del dueño es obligatorio")
    .isLength({ min: 2, max: 30 })
    .withMessage(
      "El correo electronico del dueño contener entre 2 y 30 caracteres"
    ),
  check("telefonoDuenio")
    .notEmpty()
    .withMessage("El telefono del dueño es obligatorio")
    .isNumeric()
    .withMessage("El telefono debe ser un numero")
    .custom((value) => {
      if (value >= 1000000000 && value <= 9999999999) {
        return true;
      } else {
        throw new Error(
          "El telefono no cumple con los caracteres correspondientes"
        );
      }
    }),
  check("direccionDuenio")
    .notEmpty()
    .withMessage("La direccion del dueño es obligatoria")
    .isLength({ min: 2, max: 40 })
    .withMessage("La direccion del dueño contener entre 2 y 40 caracteres"),
  check("nombreMascota")
    .notEmpty()
    .withMessage("El nombre de la mascota es obligatoria")
    .isLength({ min: 2, max: 20 })
    .withMessage(
      "El nombre de la mascota debe contener entre 2 y 30 caracteres"
    ),
  check("especieMascota")
    .notEmpty()
    .withMessage("La especie es obligatoria")
    .isIn(["perro", "gato", "ave", "roedor", "otro"])
    .withMessage("La especie no es correcta"),
  check("razaMascota")
    .notEmpty()
    .withMessage("La raza de la mascota es obligatoria")
    .isIn([
      "labrador",
      "bulldog",
      "golden",
      "pastor",
      "caniche",
      "beagle",
      "persa",
      "siames",
      "angora",
      "siberiano",
      "azul ruso",
      "bengali",
      "periquito",
      "canario",
      "cacatua",
      "cotorra",
      "diamantes",
      "hamster",
      "conejillo",
      "jerbos",
      "capibaras",
      "conejo",
      "otros",
    ]),
];

export default validarPaciente;