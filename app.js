const Express = require('express')
const Mongoose = require('mongoose')
const Cors =require('cors')
const BodyParser =require('body-parser')

const {ItemModel } = require('./Models/items')
const{ItemgroupModel} = require('./Models/itemgroups')
const { InventoryModel } = require('./Models/inventoryadjust')
const{CustomerModel} = require('./Models/customers')

let app = Express()
app.use(BodyParser.urlencoded({extended:true}))
app.use(BodyParser.json())
app.use(Cors())

Mongoose.connect("mongodb+srv://webprojectspraji:2020web@cluster0.ojqbnfv.mongodb.net/ItemDB?retryWrites=true&w=majority",{useNewUrlParser:true})

app.get("/",(req,res)=>{
    res.send("app working")
})

app.listen(3002,()=>{
    console.log("App running")
})