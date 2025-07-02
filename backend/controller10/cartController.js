import cartSchema from "../model10/cartSchema.js"


export const cartCreate = async (req, res) => {
    try {
        const dataaa = await cartSchema.create({ userId: req.user._id, productId: req.body.productId })
        return res.json({
            status: 200,
            success: true,
            message: "Item added successfully",
            body: dataaa
        })
    } catch (error) {
        console.log(error)
    }
}

export const findAllCart = async (req, res) => {
    try {
        const dataaa = await cartSchema.find({ userId: req.user._id}).populate("userId").populate("productId")
        return res.json({
            status: 200,
            success: true,
            message: "Item get successfully",
            body: dataaa
        })
    } catch (error) {
        console.log(error)
    }
}

export const updateCartItem = async (req, res) => {
    try {
        const dataaa = await cartSchema.findByIdAndUpdate({_id:req.params.id},{...req.body},{new:true})
        return res.json({
            status: 200,
            success: true,
            message: "Qunatity updated successfully",
            body: dataaa
        })
    } catch (error) {
        console.log(error)
    }
}

export const deleteSingleCartItem = async (req, res) => {
    try {
        const dataaa = await cartSchema.findByIdAndDelete({ _id: req.params.id })
        return res.json({
            status: 200,
            success: true,
            message: "Item deleted successfully",
            body: {}
        })
    } catch (error) {
        console.log(error)
    }
}

export const deleteAllItems = async (req, res) => {
    try {
        const dataaa = await cartSchema.deleteMany()
        return res.json({
            status: 200,
            success: true,
            message: "All Deleted",
            body: {}
        })
    } catch (error) {
        console.log(error)
    }
}