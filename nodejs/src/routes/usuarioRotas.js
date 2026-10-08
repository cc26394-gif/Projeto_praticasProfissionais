import express from 'express';
import usuarioController from '../controllers/usuarioController.js';

const routes = express.Router();

routes.get("/usuario", usuarioController.listarUsuario);
routes.get("/usuario/:id", usuarioController.buscarPorId);
routes.delete("/usuario/:id", usuarioController.removerUsuario);
routes.post("/usuario", usuarioController.inserirUsuario);
routes.patch("/usuario/:id", usuarioController.alterarUsuario);

export default routes;