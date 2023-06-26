const Mongoose = require('mongoose')
const itemgroupschema = Mongoose.Schema(
    {
        itemgroupname:String,
        unit:Number,
        manufacturer:String
    }
)
var ItemgroupModel = Mongoose.model("Itemgroups",itemgroupschema)
module.exports = {ItemgroupModel}