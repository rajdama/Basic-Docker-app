const express = require("express")
const mongoose = require("mongoose")

const app = express()
mongoose.connect(
    "mongodb://raj:1234@mongo:27017/?authSource=admin"
).then(()=>{console.log("successfully connected")}).catch((e)=>{console.log(e)})

app.get("/",(req,res)=>{
    res.send("<h1>Hello Raj Dama yoo !!<h1>")
})

app.listen(3000,()=>{console.log("listening......")})