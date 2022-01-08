const express=require("express");
const mongoose=require("mongoose");
const data=require("./router/datas")
const user=require("./router/users")//for register new user
const auth=require("./router/auth")//used for login 
const app=express();
mongoose.connect("mongodb://localhost/financepeerassignment")
.then(console.log("connected to db"))
.catch((err)=>console.log("some error occured",err))
app.use(express.json())
app.use("/api/data",data)
app.use("/api/user",user)
app.use("/api/auth",auth)
const port=5000;
app.listen(port,()=>{
    console.log(`server started at port ${port}`)
})
