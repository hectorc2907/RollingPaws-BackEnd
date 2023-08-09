import { Schema, model } from "mongoose";

const usuarioSchema = new Schema({
  nombreUsuario: {
    type: String,
    minLength: 2,
    maxLength: 30,
    required: true,
  },
  email: {
    type: String,
    minLength: 2,
    maxLength: 30,
    required: true,
  },
  password: {
    type: String,
    minLength: 2,
    required: true,
  },
});

const Usuario = model("usaurio", usuarioSchema);

export default Usuario;
