import { Router } from 'express';
import { userRoutes } from './user';

const v1Router = Router();

v1Router.use('v1/users', userRoutes);

export { v1Router };
