const mongoose = require("mongoose") 
const houseSchema = mongoose.Schema({ 
    house_model: String, 
    house_age: Number, 
    house_height: String 
}) 
 
module.exports = mongoose.model("house", houseSchema)