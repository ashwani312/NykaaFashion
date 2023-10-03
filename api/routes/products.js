import express from 'express';
import Product from '../models/Product.js';
import { createTheProduct, getAllProducts } from '../controllers/productsController.js';
const router = express.Router();


router.post("/", createTheProduct);
router.get("/", getAllProducts);

export default router;