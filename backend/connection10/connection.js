import mongoose from "mongoose"

export const connect=async()=>{
    try {
        await mongoose.connect(process.env.dbUrl)
        console.log("database is connected")
    } catch (error) {
        console.log(error,"error")
    }
}