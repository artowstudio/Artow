// Mongodb Connection
const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://artow:@221Bsherlocked@cluster0.zexug.mongodb.net/Artow",{useCreateIndex:true,useNewUrlParser:true,useFindAndModify:false,useUnifiedTopology:true}).then(()=>{
    console.log("We Are Connected To DataBase")
}).catch((err)=>{
    console.log(err);
})