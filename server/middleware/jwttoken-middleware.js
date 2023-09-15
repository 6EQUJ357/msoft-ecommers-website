let jwt = require("jsonwebtoken");

module.exports = async(req,res,next)=>{
    try{
        const token= req.headers['x-access-token'];

        if(!token){
            return res.send({status : 400, response : false, message:"No Token Provided!"});
        }

        let decodedToken=jwt.verify(token, process.env.JWT_SECRET_KEY);
        req.user = decodedToken.user
        next();
    }
    catch(err){
        console.log(`Error: ${err}`)
        return  res.send({status : 500, response : false, message:"Invalid or Expired Token"})
    }
      
            
            

}