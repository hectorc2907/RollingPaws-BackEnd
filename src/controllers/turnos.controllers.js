import Turnos from "../models/modeloTurnos";

export const obtenerTurno = async (req, res) => {
  try {
    const turno = await Turnos.findById(req.params.id);
    res.status(200).json(turno);
  } catch (error) {
    res.status(404).json({
      mensaje: "No se encontro el turno guardados",
    });
  }
};

export const obtenerTurnos = async (req, res) => {
  try {
    const turnos = await Turnos.find();
    res.status(200).json(turnos);
  } catch (error) {
    res.status(404).json({
      mensaje: "No se encontraron los turnos guardados",
    });
  }
};

export const crearTurnos = async (req, res) => {
  try {
    const turnoNuevo = new Turnos(req.body);
    await turnoNuevo.save();
    res.status(201).json({
      mensaje: "El turno se creo correctamente",
    });
  } catch (error) {
    res.status(404).json({
      mensaje: "Error al generar el turno",
    });
  }
};

export const bajaTurnos = async (req, res) => {
  try {
    await Turnos.findByIdAndDelete(req.params.id);
    res.status(200).json({
      mensaje: "El turno se elimino correctamente",
    });
  } catch (error) {
    res.status(404).json({
      mensaje: "Error al eliminar el turno",
    });
  }
};

export const editarDatosTurno = async (req, res) => {
  try {
    await Turnos.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({
      mensaje: "El turno se actualizo correctamente",
    });
  } catch (error) {
    res.status(400).json({
      mensaje: "No se pudo actualizar los datos",
    });
  }
};