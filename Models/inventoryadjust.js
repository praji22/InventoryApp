const Mongoose = require('mongoose')
const inventorychema = Mongoose.Schema(
    {
        quantity:Number,
        refnumber:Number,
        date:String,
        reason:String,
        description:String,
        details:String
    }
)
var InventoryModel = Mongoose.model("Inventories",inventorychema)
module.exports = {InventoryModel}