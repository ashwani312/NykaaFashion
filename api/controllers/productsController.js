import Product from "../models/Product.js"
export const getAllProducts = async (req, res, next) => {
    try {
        const product = await Product.find();
        return res.status(200).json({
            success: true,
            messege: "all products has fetched successfully",
            product: product
        })
    } catch (error) {
        return resizeBy.status(500).json(error);
    }
}


export const createTheProduct = async (req, res, next) => {
    try {
        const newProduct = await Product(req.body);
        const product = await newProduct.save();
        return res.status(200).json({
            success: true,
            messege: " products has has been created successfully",
            product: product
        });
    } catch (error) {
        return resizeBy.status(500).json(error);
    }
}


export const update = async (req, res, next) => {
    try {
        const product = await Product.find();
        return res.status(200).json({
            success: true,
            messege: "all products has fetched successfully",
            product: product
        })
    } catch (error) {
        return resizeBy.status(500).json(error);
    }
}