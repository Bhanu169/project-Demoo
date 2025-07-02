import express from "express";
import dotenv from "dotenv"
import fileUpload from "express-fileupload";
import { connect } from "./connection10/connection.js";
import userRouter from "./routes10/userRoutes.js"
import cors from "cors"
import cartRouter from "./routes10/cartRoutes.js";

dotenv.config()

export const app=express()
const port =process.env.port

connect()
app.use(cors())

app.use(express.json())
app.use(fileUpload())
app.use('/image', express.static('public/image'));
app.use("/user",userRouter)
app.use("/",cartRouter)

app.listen(port,()=>{
    console.log(`the server is running on port ${port}`)
})