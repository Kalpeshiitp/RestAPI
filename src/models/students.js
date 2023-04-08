// const mongoose = require("mongoose");
// const validation = reqiure("validation");

// const studentSchema = new mongoose.Schema({
//     name:{
//         type:String,
//         require:true,
//         minlength:3
//     },
//     email:{
//         type:String,
//         require:true,
//         unique:[true, "id is already is present"],
//         validate(value) {
//             if(!validator.isEmail(value)){
//                 throw new Error("invalid email id")
//             }
//         }
//     },
//     phone:{
//         type:Number,
//         require:true,
//         unique:true,
//         min:10
//     },
//     address: {
//         type:String,
//         require:true
//     }
// })

// const Student = new mongoose.model("Student",studentSchema)

// module.exports = Student


const mongoose = require("mongoose")
const validator = require("validator")

const studentSchema = new mongoose.Schema({
    name :{
        type:String,
        require: true,
        minlength: 3,
    },
    email:{
        type:String,
        require:true,
        unique:[true,"email id is not valid"],
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("invalid id")
            }
        }
    },
    phone:{
        type:Number,
        require:true,
        min:10,
        unique:true
    },
    address:{
        type:String,
        require:true,
    }
   
})

// const Student = new mongoose.model("Student", studentSchema)

module.exports =  mongoose.model("Student", studentSchema)