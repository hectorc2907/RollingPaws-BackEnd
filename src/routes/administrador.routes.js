import { Router } from "express";
import {
  crearAdministrador,
  login,
  obtenerAdministrador,
  obtenerAdministradores,
} from "../controllers/administrador.controllers";

const router = Router();

router.route("/administradores").get(obtenerAdministradores).post(login);
router.route("/administrador").post(crearAdministrador);
router.route("/administrador/:id").get(obtenerAdministrador);

export default router
