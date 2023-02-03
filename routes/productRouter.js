import productRout from "../controller/productController.js";
import express from "express"

const appRoute= express.Router()


appRoute.get('/product',productRout)



export default appRoute;