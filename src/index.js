import dotenv from "dotenv"
import connect_DB from "./db/index.js"
import { app } from "./app.js"

dotenv.config({
    path:"./env"
})


connect_DB()
.then(()=>{
    app.on("error", (error)=>{
        console.log("Error", error);
        throw error;
       });
    app.listen(process.env.PORT||8000, ()=>{
        console.log(`server running on port:${process.env.PORT}`);
    })
})
.catch((Error)=>{
    console.log("mongo db connection failed", Error);
})






















/*
 import mongoose from "mongoose";
 import { DB_NAME } from "./constants";
 import express from "express";

const app = express();

(async()=>{
  try {
   await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
   app.on("error", (error)=>{
    console.log("Error", error);
    throw error;
   })
   app.listen(process.env.PORT, ()=>{
    console.log(`app is running on ${process.env.PORT}`);
   })
  } catch (error) {
    console.error("Error in db connect", error);
    throw error;
  }
})()

*/