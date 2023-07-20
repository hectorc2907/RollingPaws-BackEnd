import { Schema, model } from "mongoose";

const pacientesSchema = new Schema({
  nombreDuenio: {
    type: String,
    minLength: 2,
    maxLength: 30,
    required: true,
  },
  apellidoDuenio: {
    type: String,
    minLength: 2,
    maxLength: 30,
    required: true,
  },
  emailDuenio: {
    type: String,
    minLength: 2,
    maxLength: 30,
    required: true,
  },
  telefonoDuenio: {
    type: Number,
    minLength: 10,
    maxLength: 10,
    required: true,
  },
  direccionDuenio: {
    type: String,
    minLength: 2,
    maxLength: 40,
    required: true,
  },
  nombreMascota: {
    type: String,
    minLength: 2,
    maxLength: 20,
    required: true,
  },
  especieMascota: {
    type: String,
    required: true,
  },
  razaMascota: {
    type: String,
    required: true,
  },
});

const Paciente = model("pacientes", pacientesSchema);

export default Paciente;