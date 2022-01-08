const express=require("express");
const { Data } = require("../modules/data");
const route=express.Router();
route.get("/",async(req,res)=>{
   const result=await Data.find().sort("id");
   res.status(200).send(result)
})
route.get("/:id",async(req,res)=>{
    const result=await Data.findById(req.params.id);
    if(!result)
    res.status(404).send("the data with given id is notfound")
    res.send(result)
})
route.post("/",async(req,res)=>{
     let result=new Data({userId:req.body.userId,title:req.body.title,body:req.body.body});
     result=await result.save();
     res.send(result)
})
route.put("/:id",async(req,res)=>{
    const result=await Data.findByIdAndUpdate(req.params.id,
        {title:req.body.title,body:req.body.body},
        {new:true})
        res.send(result)
})
route.delete("/:id",async(req,res)=>{
    const result=await Data.findByIdAndRemove(req.params.id)
    res.send(result);
})
module.exports=route;