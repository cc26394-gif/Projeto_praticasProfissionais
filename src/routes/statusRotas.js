import express from 'express';
import statusController from '../controllers/statusController.js';

const routes = express.Router();

routes.get("/status", statusController.listarStatus);

export default routes;