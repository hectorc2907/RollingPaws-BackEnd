import Professional from "../models/modeloProfecionales";

export const obtenerProfesional = async (req, res) => {
  try {
    const profesional = await Professional.findById(req.params.id);
    res.status(200).json(profesional);
  } catch (error) {
    console.log(error);
    res.status(404).json({
      mensaje: "No se encontro al profesional en la base de datos",
    });
  }
};

export const obtenerProfesionales = async (req, res) => {
  try {
    const profesionales = await Professional.find();
    res.status(200).json(profesionales);
  } catch (error) {
    console.log(error);
    res.status(404).json({
      mensaje: "No se encontraron profesionales en la base de datos",
    });
  }
};

export const crearProfesional = async (req, res) => {
  try {
    const profesionalNuevo = new Professional(req.body);
    await profesionalNuevo.save();
    res.status(201).json({
      mensaje: "El Profesional se registro correctamente",
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({
      mensaje: "Error al registrar al profesional",
    });
  }
};

export const bajaProfesional = async (req, res) => {
  try {
    await Professional.findByIdAndDelete(req.params.id);
    res.status(200).json({
      mensaje: "El Profesional se ha dado de baja exitosamente",
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({
      mensaje: "Error al dar de baja",
    });
  }
};

export const editarDatosProfesional = async (req, res) => {
  try {
    await Professional.findByIdAndUpdate(req.params.id);
    res.status(200).json({
      mensaje: "Se actualizaron los datos correctamente",
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      mensaje: "No se pudo actualizar los datos",
    });
  }
};
