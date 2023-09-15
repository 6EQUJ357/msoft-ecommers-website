let mongoose = require("mongoose");

let addToCartModel = new mongoose.Schema({
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
    enterquantity : {
        type : String,
        require : true
    },
    productdescription : {
        type : String,
        require : true
    },
    totalamount : {
        type : String,
        require : true
    },
    username : {
        type : String,
        require : true
    },
    useremail : {
        type : String,
        require : true,
        unique : true
    },
    date : {
        type: Date,
        default:Date.now()
    }
})

module.exports = mongoose.model("addtocart", addToCartModel)