import mongoose from 'mongoose';

const connectTheDB = () =>{
    mongoose.connect("mongodb://localhost:27017/e-comm")
}

export default connectTheDB;