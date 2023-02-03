import appRoute from "./routes/productRouter.js";
// this is from routes folder 

import express from "express"
const app = express();
// this is for express setup

import * as dotenv from "dotenv"
dotenv.config();
const port = process.env.PORT || 5000
// this is dotenv file setup for port number 


app.use(express.static('node_modules'))
// upper lines provides static file path dynamically means frontEnd part like js css etc.


app.use("/", appRoute)
// this is rout to cath req from server



app.listen(port, () => {
    console.log(`server started at port number ${port}`)
})
// this is port number which can we send req from using port number