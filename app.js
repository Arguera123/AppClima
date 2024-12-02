import express from 'express';
import logger from 'morgan';
import cookieParser from 'cookie-parser';
import path from 'path';
import cors from 'cors';
import database from './config/database.config.js';
import { fileURLToPath } from 'url';
import apiRouter from './routers/index.router.js';

const app = express();
database.connect();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(logger('dev'));

// Body parsers
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());

// Static Router
app.use(express.static(path.join(__dirname, 'public')));

// Api Router
app.use('/api', apiRouter);

export default app;
