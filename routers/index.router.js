import { Router } from 'express';
import pronosticoRouter from './pronostico.router.js';
const apiRouter = Router();

apiRouter.use('/pronostico', pronosticoRouter);

export default apiRouter;
