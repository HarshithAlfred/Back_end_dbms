const mongoose=require("mongoose");
const{Schema}=mongoose;
const Sch=new Schema({
    EmployeeId:{type:Number,required:true,unique:true},
    EmployeeName:{type:String,required:true},
    Position:{type:String,required:true},
    Paytype:{type:String},
    Payrate:{type:String,required:true},
    Factoryid:{type:Number ,required:true},
    Factorycity:{type:String,required:true},
    Vendorpart:{type:String,required:true}
},
{collection:'Sch'});
module.exports= mongoose.model('Sch',Sch);