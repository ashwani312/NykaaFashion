import express from 'express';
import { getTheProduct } from '../controllers/productController.js';

const router = express.Router();


router.get("/:id", getTheProduct);


export default router;