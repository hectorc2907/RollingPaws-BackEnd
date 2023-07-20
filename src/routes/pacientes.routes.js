import { Router } from "express";
import { bajaPaciente, crearPaciente, editarDatosPaciente, obtenerPaciente, obtenerPacientes } from "../controllers/pacientes.controllers";

const router = Router();

router.route("/paciente").get(obtenerPacientes).post(crearPaciente);
router
  .route("/paciente/:id")
  .get(obtenerPaciente)
  .put(editarDatosPaciente)
  .delete(bajaPaciente);

  export default router;