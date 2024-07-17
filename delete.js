const express=require("express");
const Sch=require('./schema.js')
const router=express.Router();
router.delete('/:id',async (req,res)=>{
    try{
    const del=req.params.id;
    let doc
    if(del!==undefined&&Number(del)){
        doc=await Sch.findOneAndDelete({EmployeeId:Number(del)});
    }
    if (!doc) {
        return res.status(200).send(false);
    }

    return res.status(200).send(true);
} catch (error) {
    console.error(error);
    return res.status(500).send('Internal Server Error');
}

});

module.exports=router