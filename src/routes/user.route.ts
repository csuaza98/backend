import { Router } from 'express';

import {
  createUserController,
  loginController,
  getUsersController,
  getUserController
} from '@/controllers/user.controller';
import { authMiddleware } from '@/middlewares/auth.middleware';

const userRouter = Router();

// crear usuario
userRouter.post('/', createUserController);

// obtener usuarios
userRouter.get('/', authMiddleware, getUsersController);

// obtener un usuario
userRouter.get('/:id', authMiddleware, getUserController);

// login
userRouter.post('/login', loginController);

export default userRouter;
