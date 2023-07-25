import { Schema, model } from "mongoose";

const turnosSchema = new Schema({
  nombreMascota: {
    type: String,
    minLength: 2,
    maxLength: 20,
    required: true,
  },
  nombreVeterinario: {
    type: String,
    minLength: 2,
    maxLength: 30,
    required: true,
  },
  fechaConsulta: {
    type: Date,
    required: true,
  },
  horaConsulta: {
    type: String,
    required: true,
  },
  detalleConsulta: {
    type: String,
    minLength: 2,
    maxLength: 5000,
    required: true,
  },
});

const Turnos = model("turnos",turnosSchema);

export default Turnos;