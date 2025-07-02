import mongoose from "mongoose";

const userModel= new mongoose.Schema({
    name:{type:String,default:""},
    email:{type:String,default:""},
    password:{type:String,default:""},
    phone:{type:Number,default:0},
    token:{type:String,default:""},
    loginTime:{type:Number,default:0},
    role:{type:Number,default:0}//0 to user 1 for admin
},{timestamp:true})

const userSchema= new mongoose.model("/user",userModel)

export default userSchema