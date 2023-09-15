let mongoose = require("mongoose");

let SignupModel = new mongoose.Schema({
    username : {
        type: String,
        required:true,
    },
    email : {
        type:String ,
        required: true,
        unique : true
    },
    mobileNO :{
        type:String ,
        required: true
    },
    password : {
        type:String ,
        required: true
    },
    userType : {
        type:String ,
        required: true
    },
    date : {
        type: Date, 
        default:Date.now()
    }
})

module.exports = mongoose.model("user", SignupModel)