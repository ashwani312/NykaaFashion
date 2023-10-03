import express from 'express';
import mongoose from 'mongoose';
import connectTheDB from './config/db.js';
import productsRoute from './routes/products.js'
import singleProductsRoute from './routes/product.js'
import userRoute from './routes/user.js'
import cors from 'cors';
const PORT = 8800;

const app = express();


//middleware
app.use(express.json());
app.use(cors());


//routemiddleware
app.use("/api/products", productsRoute);
app.use("/api/product", singleProductsRoute);
app.use("/api/auth", userRoute);






//mongoDB and connecting the Port
mongoose.connection.on("connected", ()=>{
    console.log("mongodb is connected")
})
mongoose.connection.on("disconnected", ()=>{
    console.log("mongodb is connected")
})
connectTheDB()
app.listen(PORT, ()=>{
    console.log("app is running on " + PORT)
})