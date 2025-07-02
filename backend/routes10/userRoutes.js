import express from "express"
import { deleteUserrr, findUserAll, findUserById, findUserByIdAndUpdate, logIn, signUp } from "../controller10/control.js"
import { middleware } from "../tokenGen10/middleware.js"
import { addProduct, deleteProduct, findProductAll, findProductById, findProductByIdAndUpdate } from "../controller10/productControl.js"
import { addMechanic, deleteMech, findMechAll, findMechById, findMechByIdAndUpdate } from "../controller10/mechControl.js"
import { orderCreate, orderDelete, orderGetAll, orderGetAllForAdmin, orderGetAllForShopkeeper, singleOrderGet, singleOrderGetForAdmin } from "../controller10/orderController.js"

const userRouter = express.Router()

userRouter.post("/signUp",signUp)
userRouter.post("/logIn",logIn)
userRouter.get("/findUserAll",middleware, findUserAll)
// userRouter.post("/findUserById", findUserById) // for body
userRouter.get("/findUserById/:id", findUserById) // for params
// userRouter.post("/findUserById", findUserById) //for query
userRouter.put("/findUserByIdAndUpdate/:id", findUserByIdAndUpdate)
userRouter.delete("/deleteUserrr/:id", deleteUserrr)



//---------------Product API-------------------//
userRouter.post("/addProduct",addProduct)
userRouter.get("/findProductAll",   findProductAll)
userRouter.get("/findProductById/:id",findProductById)
userRouter.put("/findProductByIdAndUpdate/:id", findProductByIdAndUpdate)
userRouter.delete("/deleteProduct/:id", deleteProduct)

//---------------Mechanic API-------------------//
userRouter.post("/addMechanic",addMechanic)
userRouter.get("/findMechAll",findMechAll)
userRouter.get("/findMechById/:id",findMechById)
userRouter.put("/findMechByIdAndUpdate/:id", findMechByIdAndUpdate)
userRouter.delete("/deleteMech/:id", deleteMech)


/////////////order////////////////////////
userRouter.post("/orderCreate",middleware,orderCreate)
userRouter.get("/orderGetAll",middleware,orderGetAll)
userRouter.get("/orderGetAllForAdmin",middleware,orderGetAllForAdmin)
userRouter.get("/orderGetAllForShopkeeper",middleware,orderGetAllForShopkeeper)
userRouter.get("/singleOrderGet/:id",middleware,singleOrderGet)
userRouter.get("/singleOrderGetForAdmin/:id",middleware,singleOrderGetForAdmin)
userRouter.delete("/orderDelete/:id",middleware,orderDelete)


// add middleware after findUserAll
export default userRouter