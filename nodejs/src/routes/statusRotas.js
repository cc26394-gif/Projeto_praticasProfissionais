
import express from 'express';
import statusController from '../controllers/statusController.js';

const routes = express.Router();

routes.get("/status", statusController.listarStatus);
routes.get("/status/:id", statusController.buscarPorId);
routes.delete("/status/:id", statusController.removerStatus);
routes.post("/status", statusController.inserirStatus);
routes.patch("/status/:id", statusController.alterarStatus);

export default routes;