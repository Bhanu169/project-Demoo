import bcrypt from "bcrypt"
import userSchema from "../model10/userSchema.js"
import jwt from "jsonwebtoken"
import tokens from "../tokenGen10/token.js"


export const signUp = async (req, res) => {
    try {
        let email = await userSchema.findOne({ email: req.body.email })
        console.log(email)

        if (email) {
            return res.json({
                status: 400,
                success: false,
                message: "email already registered",
                body: {}
            })
        }
        else {
            const passwordEnc = await bcrypt.hash(req.body.password, 10)

            console.log(req.body, "data")

            const newUser = await userSchema.create({ ...req.body, password: passwordEnc })

            const usertoken = tokens(newUser._id)
            newUser.token = usertoken.tokenGenerate
            newUser.loginTime = usertoken.tokenVerify.iat
            await newUser.save()

            console.log(newUser, "tokenssss")
            res.json({
                status: 200,
                success: true,
                message: "new user registered successfully",
                body: {}
            })
        }
    } catch (error) {
        console.log(error)
    }
}

export const logIn = async (req, res) => {
    try {
        let findEmail = await userSchema.findOne({ email: req.body.email })
        console.log(findEmail)
        if (!findEmail) {
            return res.json({
                status: 400,
                success: false,
                message: "email password not found",
                body: {}
            })
        }
        const findPswd = await bcrypt.compare(req.body.password, findEmail.password)
        console.log(findPswd, "findPassword")
        if (!findPswd) {
            return res.json({
                status: 400,
                success: false,
                message: "email password not found",
                body: {}
            })
        }
        else {

            const loginToken = tokens(findEmail._id)
            findEmail.token = loginToken.tokenGenerate
            findEmail.loginTime = loginToken.tokenVerify.iat
            await findEmail.save()

            return res.json({
                status: 200,
                success: true,
                message: "Logged in successfully",
                body: findEmail
            })
        }
    } catch (error) {
        console.log(error)
    }
}

export const findUserAll=async(req,res)=>{
    try {
        const userData= await userSchema.find()
        return res.json(userData)
        
    } catch (error) {
        console.log(error)
    }
}

export const findUserById= async(req,res)=>{
    try {
        // const userId= await userSchema.findById({_id:req.body.id})
        const userId= await userSchema.findById({_id:req.params.id})
        // const userId= await userSchema.findById({_id:req.query.id})
        return res.json(userId)
    } catch (error) {
        console.log(error)
    }
}

export const findUserByIdAndUpdate= async(req,res)=>{
    try {
        const userId= await userSchema.findByIdAndUpdate({_id:req.params.id},{...req.body},{new:true})
        return res.json(userId)
    } catch (error) {
        console.log(error)
    }
}

export const deleteUserrr=async (req,res)=>{
    try {
        const dataa=await userSchema.findByIdAndDelete({_id:req.params.id})
                return res.json({
                    message:"User Deleted successfully"
                })

    } catch (error) {
        console.log(error)
    }
}