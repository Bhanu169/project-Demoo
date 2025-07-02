import mongoose from "mongoose";

const cartModel = new mongoose.Schema({
  userId:{type:mongoose.Schema.Types.ObjectId,ref:"/user",default:null},
  productId:{type:mongoose.Schema.Types.ObjectId,ref:"/product",default:null},
    quantity:{type:Number,default:1},
},{timestamp:true})

const cartSchema= new mongoose.model("cart",cartModel)
export default cartSchema;