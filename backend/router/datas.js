const express=require("express");
const Joi=require("joi")
const { Data } = require("../modules/data");
const route=express.Router();
const auth=require("../middleware/auth")
const admin=require("../middleware/admin")
route.get("/",async(req,res)=>{
try{
   const result=await Data.find().sort("id");
   res.status(200).send(result)
}
catch(ex){
    res.status(500).send("something failed")
}
})
route.get("/:id",async(req,res)=>{
    const result=await Data.findById(req.params.id);
    try{
    if(!result)
    res.status(404).send("the data with given id is notfound")
    res.send(result)
    }
    catch(ex){
        res.status(500).send("something failed")
    }
})
route.post("/",auth,async(req,res)=>{
    const {error}=validateData(req.body)
    if(error)
    res.status(400).send(error.details[0].message);
    try{
     let result=new Data({userId:req.body.userId,title:req.body.title,body:req.body.body});
     result=await result.save();
     res.send(result)
    }
    catch(ex){
      res.status(500).send("something failed")
    }
})
route.put("/:id",auth,async(req,res)=>{
    const {error}=validateData(req.body);
    if(error)
   return res.status(400).send(error.details[0].message)
   
    const result=await Data.findByIdAndUpdate(req.params.id,
        {title:req.body.title,body:req.body.body},
        {new:true})
       if (!result)return res.status(404).send("The data with giveen id is not found")
        res.send(result)
    
    
})
route.delete("/:id",[auth,admin],async(req,res)=>{
    try{
    const result=await Data.findByIdAndRemove(req.params.id)
    if(!result)
   return res.status(404).send("The data with given id is not found")
    res.send(result);
    }
    catch(ex){
        res.status(500).send("Something failed")
    }
})
function validateData(result){
  const  schema={userId:Joi.number().min(0).max(100).required(),
title:Joi.string().min(5).max(255).required(),
body:Joi.string().min(5).max(255).required()}
return Joi.validate(result,schema)
}
module.exports=route;