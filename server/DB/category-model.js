let mongoose = require("mongoose");

let categoryModel = new mongoose.Schema({
    category : {
        type: String,
        required:true
    },
    date : {
        type: Date,
        default:Date.now()
    }
})

module.exports = mongoose.model("category", categoryModel)