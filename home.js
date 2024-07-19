const express=require("express");
const Sch =require('./schema.js')
const router=express.Router();

router.post('/',async (req,res)=>{
    try{
    const {id,names,position,paytype,payrate,facid,faccity,vendpart}=req.body;
    
    const data= new Sch({EmployeeId:id,EmployeeName:names,Position:position,Paytype:paytype,Payrate:payrate,Factoryid:facid,Factorycity:faccity,Vendorpart:vendpart});
    
    await data.save();
    return res.status(200).send(true);}
    catch(e){
        if (e.code === 11000 && e.keyPattern && e.keyPattern.EmployeeId === 1) {
            // Handle duplicate key error
            return res.status(200).send(false);}
            console.log(e);

        }
});
module.exports=router;