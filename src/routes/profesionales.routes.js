import { Router } from "express";
import {
  bajaProfesional,
  crearProfesional,
  editarDatosProfesional,
  obtenerProfesional,
  obtenerProfesionales,
} from "../controllers/profecionales.controllers";

const router = Router();

router.route("/profesional").get(obtenerProfesionales).post(crearProfesional);
router
  .route("/profesional/:id")
  .get(obtenerProfesional)
  .put(editarDatosProfesional)
  .delete(bajaProfesional);

  export default router;