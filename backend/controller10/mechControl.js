import { imgUploaddddd } from "../helper/imgUpload.js";
import mechSchema from "../model10/mechSchema.js";


export const addMechanic= async (req,res)=>{
    try {
console.log(req.files)
        if(req.files.image&&req.files.image.name){
            const image=req.files.image
            if(image)req.body.image= imgUploaddddd(image,"mechImage")
        }

console.log(req.body,"opop")
        const newMech = await mechSchema.create({...req.body,image:req.body.image})
        console.log(newMech)
        return res.json({
            status:200,
            success:true,
            message:"new mechanic added",
            body:newMech
        })
    } catch (error) {
        console.log(error)
    }
}

export const findMechAll=async(req,res)=>{
    try {
        const mechData= await mechSchema.find()

        const dataaa=mechData.map((e)=>({
            ...e.toObject(),
            picImg:`http://localhost:6942/image/mechImage/${e.image}`
        }))
        return res.json(dataaa)
        
    } catch (error) {
        console.log(error)
    }
}

export const findMechById= async(req,res)=>{
    try {
        const mechId= await mechSchema.findById({_id:req.params.id})
        console.log(mechId,"mechId")
          return res.json({g:mechId,picImg:`http://localhost:6942/image/mechImage/${mechId.image}`})
    } catch (error) {
        console.log(error)
    }
}

export const findMechByIdAndUpdate= async(req,res)=>{
    try {
         if(req.files.image&&req.files.image.name){
            const image=req.files.image
            if(image)req.body.image= imgUploaddddd(image,"mechImage")
        }
        const mechId= await mechSchema.findByIdAndUpdate({_id:req.params.id},{...req.body, image:req.body.image},{new:true})
        
        return res.json(mechId)
    } catch (error) {
        console.log(error)
    }
}

export const deleteMech=async (req,res)=>{
    try {
        const dataa=await mechSchema.findByIdAndDelete({_id:req.params.id})
                return res.json({
                    message:"Mechanic Removed successfully"
                })
    } catch (error) {
        console.log(error)
    }
}