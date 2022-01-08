const express=require("express")
const route=express.Router();
const {User}=require("../modules/user");
const bcrypt=require("bcrypt")
const Joi=require("joi")
route.post("/",async(req,res)=>{
    const {error}=userValidate(req.body)
    if(error)
    return res.status(400).send(error.details[0].message)
    let user=await User.findOne({email:req.body.email})
    if(user)
   return res.status(401).send("the user is already registered")
    user=new User({
        name:req.body.name,
        email:req.body.email,
        password:req.body.password
    })
    const salt=await bcrypt.genSalt(5);
    user.password=await bcrypt.hash(user.password,salt)
    await user.save();
    const token=user.generateAuthToken();
    res.header("x-auth-token",token).send(user)
    
})
function userValidate(user){
    const schema={
        name:Joi.string().min(5).max(255).required(),
        email:Joi.string().min(5).max(255).required(),
        password:Joi.string().min(5).max(255).required()
    }
    return Joi.validate(user,schema)
}
module.exports=route;