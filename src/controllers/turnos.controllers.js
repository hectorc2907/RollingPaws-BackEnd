import Turnos from "../models/modeloTurnos";

export const obtenerTurnos = async (req, res) => {
  try {
    const turnos = await Turnos.findById(req.params.id);
    res.status(200).json(turnos);
  } catch (error) {
    console.log(error);
    res.status(404).json({
      mensaje: "No se encontraron los turnos guardados",
    });
  }
};