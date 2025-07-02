import mongoose from "mongoose";

const mechanicModel = new mongoose.Schema({
    name:{type:String,default:""},
    experience:{type:String,default:""},
    designation:{type:String,default:""},
    phone:{type:Number,default:0},
    price:{type:Number,default:0},
    image:{type:String,default:""},
},{timestamp:true})

const mechSchema= new mongoose.model("mechanic",mechanicModel)
export default mechSchema;