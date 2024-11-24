import express from 'express';
import { addToCart, getCart, updateCart } from '../controllers/cartController.js';
import authUser from '../middleware/Auth.js';

const cartRouter = express.Router();
cartRouter.post('/get',authUser,getCart);
cartRouter.post('/add',authUser,addToCart);
cartRouter.put('/update',authUser,updateCart);

export default cartRouter;