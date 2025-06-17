import jwt from "jsonwebtoken"
import userSchema from "../model10/userSchema.js"

export const middleware= async(req,res,next)=>{
    try {
        const token=req.headers.authorization
        console.log(token,"Middleware token")

        const splitToken=token.split(" ")[1]
        const tokenVerify=jwt.verify(splitToken,process.env.seckey);
        console.log(tokenVerify,"token")

        const userCheck= await userSchema.findById({_id:tokenVerify.id})
        if(userCheck.token !== splitToken){
            return res.json({
                status:404,
                success:false,
                message:"Please login again",
                body:{}
            })
        }
        else{
            req.user=userCheck
            next()
        }
    } catch (error) {
        console.log(error,"Error in middleware");
        return res.json({
            status:500,
            success:false,
            message:"Server error at middleware",
            body:{}
        })
    }

}