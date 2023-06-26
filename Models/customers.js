const Mongoose = require('mongoose')
const customerschema = Mongoose.Schema(
    {
        customername:String,
        company:String,
        email:String,
        phone:Number
    }
)
var CustomerModel = Mongoose.model("customers",customerschema)
module.exports = {CustomerModel}