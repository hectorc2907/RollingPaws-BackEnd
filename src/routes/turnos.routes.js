import { Router } from "express";
import {
  bajaTurnos,
  crearTurnos,
  editarDatosTurno,
  obtenerTurno,
  obtenerTurnos,
} from "../controllers/turnos.controllers";
import validarTurno from "../helpers/validacionTurnos";

const router = Router();

router.route("/turno").get(obtenerTurnos).post(validarTurno,crearTurnos);
router
  .route("/turno/:id")
  .get(obtenerTurno)
  .put(validarTurno,editarDatosTurno)
  .delete(bajaTurnos);

export default router;