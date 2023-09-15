let addToCartModel = require("../DB/addtocart-model");

const addToCart = async(req,res)=>{
    try{
        const {productimg, productname, productcategory, productprice, enterquantity, productdescription, totalamount} = req.body;
        

        let saveproduct = new addToCartModel({productimg, productname, productcategory, productprice, enterquantity, productdescription, totalamount});

        saveproduct.save();

        return res.json({status : 200, response : true, message : "Product Added To Cart..."})
    }
    catch(err){
        console.log(err);
        return res.json({status : 500, response : false, message : "internal server error..."})
    }
}



//get all products

const getCartProducts = async(req,res)=>{
    try{
        return res.json({status : 200, response : true, cartProductData : await addToCartModel.find()})
    }
    catch(err){ 
        console.log(err);
        return res.json({status : 500, response : false, message : "internal server error..."})
    }
}




module.exports = {
    addToCart,
    getCartProducts
}