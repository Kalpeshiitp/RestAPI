// const mongoose = require("mongoose");
// mongoose.connect("mongodb://localhost:27017/students-api")
const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1/student-api').then(()=>{
    console.log("connection is succesful")
}).catch(()=>{
    console.log("no connection")
})