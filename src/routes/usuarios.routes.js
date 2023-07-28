import { Router } from "express";
import { crearUsuario, login, obtenerUsuario, obtenerUsuarios } from "../controllers/usuarios.controllers";

const router = Router();
router.route('/').get(obtenerUsuarios).post(login);
router.route('/nuevo').post(crearUsuario);
router.route('/usuario/:id').get(obtenerUsuario);

export default router