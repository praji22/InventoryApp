const Express = require('express')
const Mongoose = require('mongoose')
const Cors =require('cors')
const BodyParser =require('body-parser')

let app = Express()
app.use(BodyParser.urlencoded({extended:true}))
app.use(BodyParser.json())
app.use(Cors())

app.get("/",(req,res)=>{
    res.send("app working")
})

app.listen(3002,()=>{
    console.log("App running")
})