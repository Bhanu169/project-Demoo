import mongoose from "mongoose";

const userModel= new mongoose.Schema({
    name:{type:String,default:""},
    email:{type:String,default:""},
    password:{type:String,default:""},
    phone:{type:Number,default:0},
    token:{type:String,default:""},
    loginTime:{type:Number,default:0}
},{timestamp:true})

const userSchema= new mongoose.model("/user",userModel)

export default userSchema