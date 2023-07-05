const Mongoose = require('mongoose')
const packageschema = Mongoose.Schema(
    {
        packageno:String,
        customerid:String,
        salesorderno:String,
        orderdate:String,
        trackingno:Number,
        status:String
    }
)
var PackageModel = Mongoose.model("Packages",packageschema)
module.exports = {PackageModel}