import express from 'express';
import { upload } from '../configs/multer.js';
import { addProduct, changeStock, productById, productsList } from '../controllers/productController.js';
import authSeller from '../middleware/authSeller.js';

const productRouter = express.Router();

productRouter.post("/add", upload.array("images"), authSeller, addProduct);
productRouter.get('/list',productsList);
productRouter.get('/:id', productById);
productRouter.post('/stock', authSeller, changeStock);

export default productRouter;