import express from "express";

// import { orderCreate, orderDelete, orderGetAll, orderGetAllForAdmin, singleOrderGet,paymentSubmit } from "../Controllers/orderController.js";
import { middleware } from "../tokenGen10/middleware.js";
import { orderCreate, orderDelete, orderGetAll, orderGetAllForAdmin, paymentSubmit, singleOrderGet } from "../controller10/orderController.js";


const orderRoute = express.Router()

orderRoute.post("/paymentSubmit", paymentSubmit)

orderRoute.post("/orderCreate",middleware,orderCreate)
orderRoute.get("/orderGetAll",middleware,orderGetAll)
orderRoute.get("/orderGetAllForAdmin",orderGetAllForAdmin)
orderRoute.get("/singleOrderGet/:id",middleware,singleOrderGet)
orderRoute.delete("/orderDelete/:id",orderDelete)


export default orderRoute;