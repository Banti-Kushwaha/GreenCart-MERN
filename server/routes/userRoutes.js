import express from 'express';
import { isAuth, login, logout, register } from '../controllers/userControler.js';
import authUser from '../middleware/authUser.js';

export const userRouter = express.Router();

userRouter.post('/register', register);
userRouter.post('/login', login);
userRouter.get('/logout', authUser ,logout);
userRouter.get('/is-auth', authUser , isAuth);

