import mongoose from "mongoose"

const productModel= new mongoose.Schema({
    title:{type:String,default:""},
    description:{type:String,default:""},
    image:{type:String,default:""},
    price:{type:Number,default:0},
    quantity:{type:Number,default:0}
},{timestamp:true})

const productSchema= new mongoose.model("/product",productModel)

export default productSchema;