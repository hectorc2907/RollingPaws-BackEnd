import { Router } from "express";
import {
  bajaTurnos,
  crearTurnos,
  editarDatosTurno,
  obtenerTurno,
  obtenerTurnos,
} from "../controllers/turnos.controllers";

const router = Router();

router.route("/turno").get(obtenerTurnos).post(crearTurnos);
router
  .route("/turno/:id")
  .get(obtenerTurno)
  .put(editarDatosTurno)
  .delete(bajaTurnos);

export default router;