import { imgUploaddddd } from "../helper/imgUpload.js";
import productSchema from "../model10/productSchema.js";


export const addProduct= async (req,res)=>{
    try {
console.log(req.files)
        if(req.files.image&&req.files.image.name){
            const image=req.files.image
            if(image)req.body.image= imgUploaddddd(image,"productImage")
        }

console.log(req.body,"opop")
        const newProduct = await productSchema.create({...req.body,image:req.body.image})
        console.log(newProduct)
        return res.json({
            status:200,
            success:true,
            message:"new product added",
            body:newProduct
        })
    } catch (error) {
        console.log(error)
    }
}


export const findProductAll=async(req,res)=>{
    try {
        const productData= await productSchema.find()

        const dataaa=productData.map((e)=>({
            ...e.toObject(),
            picImg:`http://localhost:6942/image/productImage/${e.image}`
        }))
        return res.json(dataaa)
        
    } catch (error) {
        console.log(error)
    }
}

export const findProductById= async(req,res)=>{
    try {
        
        const productId= await productSchema.findById({_id:req.params.id})
        console.log(productId,"productId")
          return res.json({g:productId,picImg:`http://localhost:6942/image/productImage/${productId.image}`})
    } catch (error) {
        console.log(error)
    }
}

export const findProductByIdAndUpdate= async(req,res)=>{
    try {
        const productId= await productSchema.findByIdAndUpdate({_id:req.params.id},{...req.body},{new:true})
        return res.json(productId)
    } catch (error) {
        console.log(error)
    }
}

export const deleteProduct=async (req,res)=>{
    try {
        const dataa=await productSchema.findByIdAndDelete({_id:req.params.id})
                return res.json({
                    message:"Product Deleted successfully"
                })
    } catch (error) {
        console.log(error)
    }
}