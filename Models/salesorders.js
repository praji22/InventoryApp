const Mongoose = require('mongoose')
const salesorderschema = Mongoose.Schema(
    {
        customername:String,
        itemname:String,
        unit:Number,
        salesorderno:Number,
        orderdate:String,
        shipmentdate:String,
        payment:Number
    }
)
var SalesorderModel = Mongoose.model("salesorders",salesorderschema)
module.exports = {SalesorderModel}