import Product from "../models/Product.js"



export const getTheProduct = async(req, res, next)=>{
    try {
        const prod = await Product.findById(req.params.id);
        return res.status(200).json(prod) ;
    } catch (error) {
        return res.status(500).json(error) ;
    }
}