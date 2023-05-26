
const mongoose=require('mongoose');
const validator=require('validator');
mongoose.connect("mongodb://0.0.0.0:27017/students-api")
.then(()=>{console.log("connection successful....")})
.catch((err)=>console.log(err));

const StudentsSchema=mongoose.Schema({
    name:{
        type: String,
        requird:true,
        minlength:3
    },
    email:{
            type:String,
            requiered:true,
            unique:[true,"Email id is already present"],
            validate(value)
            {
                if(!validator.isEmail(value)){
                    throw new Error("Invalid email");
                }
            }
    },
    phone:{
        type:Number,
        min:10,
        required:true,
        unique:true
    },
    address:{
        type:String,
        required:true,
    }
});
const Students=new mongoose.model('Students',StudentsSchema);
module.exports=Students;