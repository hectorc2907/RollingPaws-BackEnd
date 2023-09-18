import Paciente from "../models/modeloPacientes";

export const obtenerPaciente = async (req, res) => {
  try {
    const paciente = await Paciente.findById(req.params.id);
    res.status(200).json(paciente);
  } catch (error) {
    res.status(404).json({
      mensaje: "No se encontraron los datos del paciente",
    });
  }
};

export const obtenerPacientes = async (req, res) => {
  try {
    const pacientes = await Paciente.find();
    res.status(200).json(pacientes);
  } catch (error) {
    res.status(404).json({
      mensaje: "No se encontro datos de ningun paciente",
    });
  }
};

export const crearPaciente = async (req, res) => {
  try {
    const pacienteNuevo = new Paciente(req.body);
    await pacienteNuevo.save();
    res.status(201).json({
      mensaje: "El paciente se registro correctamente",
    });
  } catch (error) {
    res.status(404).json({
      mensaje: "Error al registrar el paciente",
    });
  }
};

export const bajaPaciente = async (req, res) => {
  try {
    await Paciente.findByIdAndDelete(req.params.id);
    res.status(200).json({
      mensaje: "El paciente se ha dado de baja exitosamente",
    });
  } catch (error) {
    res.status(404).json({
      mensaje: "Error al eliminar el paciente",
    });
  }
};

export const editarDatosPaciente = async (req, res) => {
  try {
    await Paciente.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({
      mensaje: "Se actualizaron los datos correctamente",
    });
  } catch (error) {
    res.status(400).json({
      mensaje: "No se pudo actualizar los datos",
    });
  }
};