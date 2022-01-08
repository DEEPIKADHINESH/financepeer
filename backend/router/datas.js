const express=require("express");
const route=express.Router();
const {Data}=require("../modules/data")
route.get("/",async(req,res)=>{
    const result=await Data.find();
    res.send(result)
})