const express=require("express");
const Sch=require('./schema');
const router=express.Router();

router.post('/',async (req,res)=>{
    
    try{
    const {qori}= req.body;
    let documents;
    if(qori !== undefined&&(Number(qori))){ documents=await Sch.find({EmployeeId:Number(qori)});}
    if(qori===''){
        documents= await Sch.find({});}
    if(!documents||documents.length===0) {
        return res.status(200).send(false);
      }
  
      // Return the documents found
      return res.status(200).json(documents);
    }
catch(e){
    console.log(e);
 return res.status(500).send(e);}
})
module.exports=router;