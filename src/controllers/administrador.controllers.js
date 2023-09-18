import Usuario from "../models/modeloAdministrador";
import bcrypt from "bcrypt";

export const obtenerAdministrador = async (req, res) => {
  try {
    const administrador = await Usuario.findById(req.params.id);
    res.status(200).json(administrador);
  } catch (error) {
    res.status(404).json({ mensaje: "Error al buscar el administrador" });
  }
};

export const obtenerAdministradores = async (req, res) => {
  try {
    const administrador = await Usuario.find();
    res.status(200).json(administrador);
  } catch (error) {
    res.status(404).json({ mensaje: "Error al buscar administradores" });
  }
};

export const crearAdministrador = async (req, res) => {
  try {
    let administrador = await Usuario.findOne({ email: req.body.email });
    if (administrador) {
      return res.status(400).json({
        mensaje: "El email ya esta registrado",
      });
    }
    const administradorNuevo = new Usuario(req.body);
    // const salt = bcrypt.genSaltSync(10);
    // administradorNuevo.password = bcrypt.hashSync(req.body.password, salt);
    await administradorNuevo.save();
    res.status(201).json({
      mensaje: "El administrador se creo correctamente",
    });
  } catch (error) {
    res.status(404).json({
      mensaje: "Error al crear administrador",
    });
  }
};

export const login = async (req, res) => {
  try {
    let administrador = await Usuario.findOne({ email: req.body.email });
    if (!administrador) {
      return res.status(404).json({
        mensaje: "Correo o Contraseña Invalida",
      });
    }
    if (!passwordValido) {
      return res.status(400).json({
        mensaje: "Correo o Contraseña Invalida",
      });
    }
    res.status(200).json({
      mensaje: "El usuario es correcto",
      nombreUsuario: administrador.nombreUsuario,
    });
  } catch (error) {
    res.status(404).json({
      mensaje: "Error al intentar loguear el Administrador",
    });
  }
};
