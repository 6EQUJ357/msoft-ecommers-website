let productModel = require("../DB/product-model")




const products = async(req,res)=>{
    try{
        const {productname, productcategory, productprice, productquantity, productdescription} = req.body;
        
        let images = req.files.map(data=>data.filename)


        let saveproduct = new productModel({productimg : images, productname, productcategory, productprice, productquantity, productdescription});

        saveproduct.save();

        return res.json({status : 200, response : true, message : "Product Added Successfully..."})

    }
    catch(err){ 
        console.log(err);
        return res.json({status : 500, response : false, message : "internal server error..."})
    }
}


//get all products

const getAllProducts = async(req,res)=>{
    try{
        return res.json({status : 200, response : true, productData : await productModel.find()})
    }
    catch(err){ 
        console.log(err);
        return res.json({status : 500, response : false, message : "internal server error..."})
    }
}


//edit product

const editProduct = async(req,res)=>{
    try{
        const {productname, productcategory, productprice, productquantity, productdescription} = req.body;
        let images = req.files.map(data=>data.filename)

        await productModel.findByIdAndUpdate(req.params.id, {productimg : images, productname, productcategory, productprice, productquantity, productdescription}, {new : true})

        return res.json({status : 200, response : true, message : "Product Updated Successfully..."})

    }
    catch(err){ 
        console.log(err);
        return res.json({status : 500, response : false, message : "internal server error..."})
    }
}


const deleteProduct = async(req,res)=>{
    try{
        await productModel.findByIdAndDelete(req.params.id);

        return res.json({status : 200, response : true, productData : await productModel.find(), message : "Produce Deleted Successfully..."})

    }
    catch(err){ 
        console.log(err);
        return res.json({status : 500, response : false, message : "internal server error..."})
    }
}


module.exports = {
    products,
    getAllProducts,
    editProduct,
    deleteProduct
}