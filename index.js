const express =require("express");
const cors=require("cors");
const home =require("./home.js");
const search=require("./search.js");
const delet=require("./delete.js");
const app=express();
const dotenv=require("dotenv");
const connectdb = require('./db');
dotenv.config()
app.use(express.json());
app.use(cors());
const port=4000;
connectdb();
app.get('/',(req,res)=>{res.send("Server ready")});
app.listen(port,(req,res)=>{console.log(`Server is listening at port : ${port}`)});
app.use('/home',home);
app.use('/search',search);
app.use('/delete',delet);