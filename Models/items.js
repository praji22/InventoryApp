const Mongoose = require('mongoose')
const itemschema = Mongoose.Schema(
    {
        itemname:String,
        unit:Number,
        dimensions:String,
        weight:Number,
        manufacturer:String,
        brand:String,
        sellingprice:Number,
        costprice:Number,
        description:String,
        openingstock:Number,
        reorderpoint:Number,
        preferredvendor:String
    }
)
var ItemModel = Mongoose.model("Items",itemschema)
module.exports = {ItemModel}