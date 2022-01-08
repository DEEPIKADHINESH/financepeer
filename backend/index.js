const express=require("express");
const mongoose=require("mongoose");
const data=require("./router/datas")
const app=express();
mongoose.connect("mongodb://localhost/financepeerassignment")
.then(console.log("connected to db"))
.catch((err)=>console.log("some error occured",err))
app.use(express.json())
app.use("/api/data",data)
const port=5000;
app.listen(port,()=>{
    console.log(`server started at port ${port}`)
})
