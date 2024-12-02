import { Router } from 'express';
import controller from '../controllers/pronostico.controller.js';

const pronosticoRouter = Router();

pronosticoRouter.post('/', controller.createPronostico);

pronosticoRouter.get('/', controller.getPronosticos);

export default pronosticoRouter;
