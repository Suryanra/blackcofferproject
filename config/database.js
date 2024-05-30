const mongoose=require("mongoose");
require("dotenv").config();

const dbConnect=async ()=>{
    mongoose.connect(process.env.DATABASE_URL,{
        useNewUrlParser:true,
        UseUnifiedTopology:true
    })
    // however without params bhi chal jat ahai
    .then(()=>{console.log("Database connected successfully ")})
    .catch((error)=>{console.log("Error in connecting database, ERROR: ",error)});
}

module.exports={dbConnect};