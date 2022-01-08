const mongoose=require("mongoose");
const dataSchema=new mongoose.Schema({
    userId:{
        type:Number,
        min:0,
        max:255
    },
    id:{
       type:Number,
       min:0,
       max:255,
       unique:true
    },
    title:{
        type:String,
        required:true,
        minlength:5,
        maxlength:255
    },
    body:{
        type:String,
        required:true,
        minlength:5,
        maxlength:255
    }
})
const Data=mongoose.model("Data",dataSchema)
// async function createData(){
//     const data=new Data({
//     userId: 1,
//       id: 1,
//       title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
//       body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    
// })
// const result=await data.save();
// console.log(result);
// }
//createData();
exports.Data=Data;

