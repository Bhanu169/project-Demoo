import express from "express"
import { cartCreate, deleteAllItems, deleteSingleCartItem, findAllCart, updateCartItem } from "../controller10/cartController.js"
import { middleware } from "../tokenGen10/middleware.js"

const cartRouter = express.Router()

cartRouter.post("/cartCreate",middleware, cartCreate)
cartRouter.get("/findAllCart",middleware, findAllCart)
cartRouter.put("/updateCartItem/:id",middleware, updateCartItem)
cartRouter.delete("/deleteSingleCartItem/:id",middleware, deleteSingleCartItem)
cartRouter.delete("/deleteAllItems",middleware, deleteAllItems)

export default cartRouter