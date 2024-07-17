const mongoose =require("mongoose");
const dotenv=require("dotenv");
dotenv.config();

const connectdb=async()=>{
    try{
        await mongoose.connect(process.env.Mongodb_url);
        console.log("Connected to Mongodb");

    }
    catch(e){
        console.log("Didnot connect Mongodb",e);
    }
}
module.exports= connectdb;