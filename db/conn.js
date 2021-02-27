// Mongodb Connection
const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://omar:12345@cluster0.zexug.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",{useCreateIndex:true,useNewUrlParser:true,useFindAndModify:false,useUnifiedTopology:true}).then(()=>{
    console.log("We Are Connected To DataBase")
}).catch((err)=>{
    console.log(err);
})