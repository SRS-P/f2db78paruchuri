const mongoose = require("mongoose") 
const houseSchema = mongoose.Schema({ 
    house_model: String,
    house_height: String,
    house_age:{ 
        type:Number, 
    min:1,
    max:70
    }
    
}) 
 
module.exports = mongoose.model("house", houseSchema)