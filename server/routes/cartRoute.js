import authUser from "../middleware/authUser";
import { updateCart } from "../controllers/cartController";
import express from 'express';

const cartRouter = express.Router();

cartRouter.post('/update', authUser, updateCart);

export default cartRouter;