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

app.post('/additems',async(req,res)=>{
    let data = new ItemModel(req.body)
    console.log(data)
    await data.save()
    res.json({"status":"success","data":data})
})

app.get('/displayitems',async(req,res)=>{
    try {
        const result = await ItemModel.find();
        res.json(result);
      } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
      }
})

app.post('/additemgroups',async(req,res)=>{
    let data = new ItemgroupModel(req.body)
    console.log(data)
    await data.save()
    res.json({"status":"success","data":data})
})

app.get('/viewitemgroups',async(req,res)=>{
    try {
        const result = await ItemgroupModel.find();
        res.json(result);
      } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
      }
})

app.post('/addinventoryadjust',async(req,res)=>{
    let data= new InventoryModel(req.body)
    console.log(data)
    await data.save()
    res.json({"status":"success","data":data})
})

app.get('/viewinventory',async(req,res)=>{
    try {
        const result = await InventoryModel.find();
        res.json(result);
      } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
      }
})

app.listen(3002,()=>{
    console.log("App running")
})