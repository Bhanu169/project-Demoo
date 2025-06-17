import express from "express"
import { deleteUserrr, findUserAll, findUserById, findUserByIdAndUpdate, logIn, signUp } from "../controller10/control.js"
import { middleware } from "../tokenGen10/middleware.js"

const userRouter = express.Router()

userRouter.post("/signUp",signUp)
userRouter.post("/logIn",logIn)
userRouter.get("/findUserAll",middleware, findUserAll)
// userRouter.post("/findUserById", findUserById) // for body
userRouter.get("/findUserById/:id", findUserById) // for params
// userRouter.post("/findUserById", findUserById) //for query
userRouter.put("/findUserByIdAndUpdate/:id", findUserByIdAndUpdate)
userRouter.delete("/deleteUserrr/:id", deleteUserrr)

// add middleware after findUserAll
export default userRouter