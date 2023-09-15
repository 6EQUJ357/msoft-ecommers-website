let bcrypt = require("bcrypt");
let signUpUserModel = require("../../DB/signupUser-model")




let signUpUserControllerPost = async(req, res)=>{
    try{
        const {username, email, mobileNO, password, confirmpassword} = req.body;

        //all fields validation
        if(!username || !email || !mobileNO || !password || !confirmpassword){
            return res.json({status : 400, response : false, message : "fill the fields"})
        }

         // email validation regular expression
         const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

         // Validate email
         if (!email || !emailRegex.test(email)) {
             return res.json({status : 400, response : false, message: 'Invalid email' });
         }
 
          // Mobile number validation regular expression
         const mobileNumberRegex = /^\d+$/;
 
         if (!mobileNO || !mobileNumberRegex.test(mobileNO)) {
             return res.json({status : 400, response : false, message: 'Invalid mobile number' });
         }

         // Validate password
        if (!password || password.length < 6 || password.length > 16) {
            return res.json({status : 400, response : false, message: 'Password must be  6-16 characters long' });
        }

        // Generate a salt
        const salt = await bcrypt.genSalt(10);

        // Generate bcrypt password hash
        const hashedPassword = await bcrypt.hash(password, salt);
        
        // Compare bcrypt hash of password and confirm password
        const passwordMatch = await bcrypt.compare(confirmpassword, hashedPassword);
        if (!passwordMatch) {
        return res.json({status : 400, response : false, message: 'Passwords do not match' });
        }


         //check exist based on email
         let existEmail = await signUpUserModel.findOne({email : email});
         if(existEmail){
             return res.json({status : 400, response : false, message : "User Already Exist.."})
         }


        //for admin 
        
        if(username === "msoft" && email === "msoft@gmail.com" && mobileNO === "0000011111"){
            const saveUser = new signUpUserModel({username, email, mobileNO, password : hashedPassword, userType : "admin"});
            
            await saveUser.save();

            res.json({status : 200, response : true, message: 'Admin registered successfully' });
        }
        else{
            const saveUser = new signUpUserModel({username, email, mobileNO, password : hashedPassword, userType : "user"});

            await saveUser.save();

            res.json({status : 200, response : true, message: 'Account registered successfully' });
        }

    }
    catch(err){
        console.log(err);
        return res.json({status : 500, response : false, message : "internal server error..."})
    }
}


//get all users

const getAllUsers = async(req,res)=>{
    try{
        let data = await signUpUserModel.find({userType : "user"}).select("-password").exec()
        return res.json({status : 200, response : true, users : data})
    }
    catch(err){
        console.log(err);
        return res.json({status : 500, response : false, message : "internal server error..."})
    }
}


//edit users (include admin)

const editUsers = async(req,res)=>{
    try{
        const {username, email, mobileNO} = req.body;

       await signUpUserModel.findByIdAndUpdate(req.params.id, {username, email, mobileNO}, {new : true})

       return res.json({status : 200, response : true, message : "Account Update Successfully..."})
    }
    catch(err){
        console.log(err);
        return res.json({status : 500, response : false, message : "internal server error..."})
    }
}

//delete users 

const deleteUsers = async(req,res)=>{
    try{
        await signUpUserModel.findByIdAndDelete(req.params.id);

        return res.json({status : 200, response : true, users : await signUpUserModel.find({userType : "user"}).select("-password").exec()})
    }
    catch(err){
        console.log(err);
        return res.json({status : 500, response : false, message : "internal server error..."})
    }
}



module.exports = {
    signUpUserControllerPost,
    getAllUsers,
    editUsers,
    deleteUsers
}