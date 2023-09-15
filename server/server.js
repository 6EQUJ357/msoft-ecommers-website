let express = require("express");
let mongoose = require("mongoose");
let cors = require("cors");
let jwt = require("jsonwebtoken");
let multer = require("multer");
let path = require("path");


//.env
require('dotenv').config();
let port= process.env.PORT || 8080;
let db_connection = process.env.DB_CONNECTION;

//controllers
let authcontroller = require("./controllers/Auth-controllers/signUp-controller");
let signInUserControllerPost = require("./controllers/Auth-controllers/signIn-controller");
let productCategory = require("./controllers/category-controller");
let products = require("./controllers/product-controller");
let addToCart = require("./controllers/cart-controller");

//middleware
let jwtMiddleware = require("./middleware/jwttoken-middleware");
let protect_router_myaccount = require("./middleware/protected-router");

let app = express();

app.use(cors({origin : "*"}));
app.use(express.json());

//multer images
app.use("/productImages", express.static("productImages"))


//mongoDB
mongoose.connect(db_connection, { 
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=>console.log("DB Authentication Successfull...")).catch(err=>console.log("error found while connecting DB", err));

 
//basic home API

app.get("/", (req, res)=>{ 
    
    return  res.send("<h1>server is running...</h1>");
})


// all protected route
app.get(["/dashboard", "/edituser", "/editproduct", "/productdetails", "/cart", "/productcheckout"], jwtMiddleware, protect_router_myaccount.protect_myaccount)


//signup post API
app.post("/signup", authcontroller.signUpUserControllerPost)


//signin post API
app.post("/signin", signInUserControllerPost.signInUserControllerPost)

//get all users
app.get("/getallusers", authcontroller.getAllUsers)

//edit users (include admin)
app.put("/edituser/:id", authcontroller.editUsers)
 
//delete users
app.delete("/deleteuser/:id", authcontroller.deleteUsers)


 
 
//category
app.post("/category", productCategory.productCategory)

//get all categories
app.get("/getallcategories", productCategory.getAllCategories)

//edit category
app.put("/editcategory/:id", productCategory.editCategory)

//delete category
app.delete("/deletecategory/:id", productCategory.deleteCategory)






 //multer image store in a images file

 const storage = multer.diskStorage({
    destination: (req, file, cb)=> {
    cb(null, 'productImages'); 
    },
    filename: (req, file, cb)=> {
        //console.log(file)
    cb(null, Date.now() + path.extname(file.originalname)); 
    } 
});

//image file type  check
const filefilter = (req, file, cb) => {
    if (
    file.mimetype === 'image/png' ||
    file.mimetype === 'image/jpg' ||
    file.mimetype === 'image/jpeg'
    ) {
    cb(null, true);
    } else {
    cb(null, "Only image files are allowed");
    }
};

const upload = multer({ storage: storage, filefilter: filefilter });


//products
app.post("/products", upload.array("productimg"), products.products)

//get all products
app.get("/getallproducts", products.getAllProducts)

//edit products
app.put("/editproduct/:id", upload.array("productimg"), products.editProduct)

//delete products
app.delete("/deleteproduct/:id", products.deleteProduct)




// add to cart
app.post("/addtocart", addToCart.addToCart)

// get cart products
app.get("/getcartproducts", addToCart.getCartProducts)

//delete cart products
app.delete("/deletecartproduct/:id", addToCart.deleteCartProducts)


app.listen(port, ()=>console.log(`server is running at : ${port}`))  