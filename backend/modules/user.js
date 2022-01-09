const mongoose=require("mongoose");
const jwt=require("jsonwebtoken")
const userSchema=mongoose.Schema({
    email:{
        type:String,
        requried:true,
        unique:true,
        minlength:5,
        maxlength:255
    },
    password:{
         type:String,
         required:true,
         minlength:5,
         maxlength:255
    },
    name:{
        type:String,
        minlength:5,
        maxlength:255,
        required:true
    },
    isAdmin:Boolean
})

userSchema.methods.generateAuthToken=function(){
    const token=jwt.sign({_id:this.id,isAdmin:this.isAdmin},"jwtPrivateKey")
    return token;
}
const User=mongoose.model("User",userSchema);
exports.User=User;