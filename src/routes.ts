import express from 'express';
import {UserRouter} from './controllers/user';
export const AppRouter = express.Router();

AppRouter.use('/users', UserRouter);
