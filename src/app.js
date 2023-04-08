const express = require("express");
const app = express();
const Student = require("./models/students")
require("./db/conn")
const port = process.env.PORT || 8000

app.use(express.json())

app.post("/students", (req,res)=>{

    const user = new Student(req.body)
    // res.send("Hello from the other side")
    user.save().then(()=>{
        res.status(201);
        res.send(user)
    }).catch((e)=>{
        res.status(400);
        res.send(e);
    })
})

app.listen(port, ()=>{
    console.log(`connetion set at port ${port}`)
})