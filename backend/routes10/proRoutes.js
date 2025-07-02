import express from "express";
import { addProduct, deleteProduct, findProductAll, findProductById, findProductByIdAndUpdate } from "../controller10/productControl.js";

const proRouteee = express.Router()

proRouteee.post("/createPro",addProduct);
proRouteee.get("/findAllPro",findProductAll);
proRouteee.get("/findProductById/:id",findProductById)
proRouteee.put("/findProductByIdAndUpdate/:id", findProductByIdAndUpdate
)
proRouteee.delete("/deleteProduct/:id", deleteProduct)

export default proRouteee;