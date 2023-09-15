let categoryModel = require("../DB/category-model")

const productCategory = async(req,res)=>{
    try{
        const {category} = req.body;

        let exist = await categoryModel.findOne({category : category});
 
        if(exist){
            return res.json({status : 400, response : false, message : "This Category already Exist"});
        }

        let saveCategory = await new categoryModel({category})

        await saveCategory.save()

        return res.json({status : 200, response : true, message : "Category Added Successfully..."})
    }
    catch(err){
        console.log(err);
        return res.json({status : 500, response : false, message : "internal server error..."})
    }
}


//get all category

const getAllCategories = async(req,res)=>{
    try{
        let categories = await categoryModel.find();

        return res.json({status : 200, response : true, categoryData : categories})
    }
    catch(err){
        console.log(err);
        return res.json({status : 500, response : false, message : "internal server error..."})
    }
}

//edit category

const editCategory = async(req,res)=>{
    try{
        const {category} = req.body;

        await categoryModel.findByIdAndUpdate(req.params.id, {category : category}, {new : true})

        return res.json({status : 200, response : true, message : "Category Updated Successfully..."})
    }
    catch(err){
        console.log(err);
        return res.json({status : 500, response : false, message : "internal server error..."})
    }
}



//delete category

const deleteCategory = async(req,res)=>{
    try{
        
        await categoryModel.findByIdAndDelete(req.params.id);

        return res.json({status : 200, response : true, categoryData : await categoryModel.find(), message : "Category Deleted Successfully..."})
    }
    catch(err){ 
        console.log(err);
        return res.json({status : 500, response : false, message : "internal server error..."})
    }
}


module.exports = {
    productCategory,
    getAllCategories,
    editCategory,
    deleteCategory
}