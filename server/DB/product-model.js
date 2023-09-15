let mongoose = require("mongoose");

let productModel = new mongoose.Schema({
    productimg : {
        type : Array,
        require : true
    },
    productname : {
        type : String,
        require : true
    },
    productcategory : {
        type : String,
        require : true
    },
    productprice : {
        type : String,
        require : true
    },
    productquantity : {
        type : String,
        require : true
    },
    productdescription : {
        type : String,
        require : true
    },
    date : {
        type: Date,
        default:Date.now()
    }
})

module.exports = mongoose.model("products", productModel)