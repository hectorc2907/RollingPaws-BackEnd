import { Router } from "express";
import {
  bajaPaciente,
  crearPaciente,
  editarDatosPaciente,
  obtenerPaciente,
  obtenerPacientes,
} from "../controllers/pacientes.controllers";
import validarPaciente from "../helpers/validacionPacientes";

const router = Router();

router
  .route("/paciente")
  .get(obtenerPacientes)
  .post(validarPaciente, crearPaciente);
router
  .route("/paciente/:id")
  .get(obtenerPaciente)
  .put(validarPaciente,editarDatosPaciente)
  .delete(bajaPaciente);

export default router;
