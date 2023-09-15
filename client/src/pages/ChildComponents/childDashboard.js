import React, {useState, useEffect} from 'react'
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { server_access_point } from '../components/config';
import jwt_decode from "jwt-decode";
import Footer from '../components/reUseModules/footer';
import Navbar from '../components/reUseModules/navbar';
import { useFormik } from 'formik';
import * as Yup from "yup";
import $ from "jquery"
import "jquery-ui-dist/jquery-ui"

 
   
const ChildDashboard = (params) => {

    let navigate = useNavigate();

    const [allusers, setAllUsers] = useState([]);
    //console.log("all users", allusers);

    const [allCategoty, setAllCategory] = useState([]);
    //console.log("all category", allCategoty);

    const [allProducts, setAllProducts] = useState([]);
        //console.log("all products", allProducts);



     // Function to handle token expiration and redirect
  const handleTokenExpiration = () => {
    const token = localStorage.getItem('webtoken');
    if (token) {
      const decodedToken = jwt_decode(token);
      //console.log("decodetoken", decodedToken);

      const currentTime = Date.now() / 1000; // Convert milliseconds to seconds
      //console.log("currenttime", currentTime);

      if (decodedToken.exp < currentTime) {
        // Token has expired, redirect to login page
        localStorage.clear(); // Clear token from storage
        navigate("/signin"); // Redirect to login page
      } 
      else {
        // Token is still valid, set up a timer to check for expiration
        const timeUntilExpiration = (decodedToken.exp - currentTime) * 1000; // Convert seconds back to milliseconds
        setTimeout(handleTokenExpiration, timeUntilExpiration);
      }
    } else {
      // Token not found, redirect to login page
      navigate("/signin");
    }
  };

  
  useEffect(()=>{

    //get all users

     axios.get(`${server_access_point}/getallusers`).then(res=>
        {
            setAllUsers(res.data.users); 

        }).catch(err=>console.log(err));

        //get all categories

        axios.get(`${server_access_point}/getallcategories`).then(res=>
            {
                setAllCategory(res.data.categoryData); 
    
            }).catch(err=>console.log(err));


        //get all products
        axios.get(`${server_access_point}/getallproducts`).then(res=>
            {
                setAllProducts(res.data.productData); 
    
            }).catch(err=>console.log(err));


     
    handleTokenExpiration(); // Call the function when the component mounts
  
    // Cleanup function to clear the timer when the component unmounts
    return () => clearTimeout(handleTokenExpiration);
  },[])

 
  useEffect(()=>{  
    (function($) {
        "use strict";
      
       $(document).ready(function(){
  
            /* --------------------------------------------------------
                1. Variables
            --------------------------------------------------------- */
            var $window = $(window),
            $body = $('body');
    
            /* --------------------------------------------------------
                2. Mobile Menu
            --------------------------------------------------------- */
             /* ---------------------------------
                Utilize Function 
            ----------------------------------- */
            (function () {
                var $ltn__utilizeToggle = $('.ltn__utilize-toggle'),
                    $ltn__utilize = $('.ltn__utilize'),
                    $ltn__utilizeOverlay = $('.ltn__utilize-overlay'),
                    $mobileMenuToggle = $('.mobile-menu-toggle');
                $ltn__utilizeToggle.on('click', function (e) {
                    e.preventDefault();
                    var $this = $(this),
                        $target = $this.attr('href');
                    $body.addClass('ltn__utilize-open');
                    $($target).addClass('ltn__utilize-open');
                    $ltn__utilizeOverlay.fadeIn();
                    if ($this.parent().hasClass('mobile-menu-toggle')) {
                        $this.addClass('close');
                    }
                });
                $('.ltn__utilize-close, .ltn__utilize-overlay').on('click', function (e) {
                    e.preventDefault();
                    $body.removeClass('ltn__utilize-open');
                    $ltn__utilize.removeClass('ltn__utilize-open');
                    $ltn__utilizeOverlay.fadeOut();
                    $mobileMenuToggle.find('a').removeClass('close');
                });
            })();
    
            /* ------------------------------------
                Utilize Menu
            ----------------------------------- */
            function mobileltn__utilizeMenu() {
                var $ltn__utilizeNav = $('.ltn__utilize-menu, .overlay-menu'),
                    $ltn__utilizeNavSubMenu = $ltn__utilizeNav.find('.sub-menu');
    
                /*Add Toggle Button With Off Canvas Sub Menu*/
                $ltn__utilizeNavSubMenu.parent().prepend('<span className="menu-expand"></span>');
    
                /*Category Sub Menu Toggle*/
                $ltn__utilizeNav.on('click', 'li a, .menu-expand', function (e) {
                    var $this = $(this);
                    if ($this.attr('href') === '#' || $this.hasClass('menu-expand')) {
                        e.preventDefault();
                        if ($this.siblings('ul:visible').length) {
                            $this.parent('li').removeClass('active');
                            $this.siblings('ul').slideUp();
                            $this.parent('li').find('li').removeClass('active');
                            $this.parent('li').find('ul:visible').slideUp();
                        } else {
                            $this.parent('li').addClass('active');
                            $this.closest('li').siblings('li').removeClass('active').find('li').removeClass('active');
                            $this.closest('li').siblings('li').find('ul:visible').slideUp();
                            $this.siblings('ul').slideDown();
                        }
                    }
                });
            }
            mobileltn__utilizeMenu();
    
            /* --------------------------------------------------------
                3. Mega Menu
            --------------------------------------------------------- */
            $('.mega-menu').each(function(){
                if($(this).children('li').length){
                    var ulChildren = $(this).children('li').length;
                    $(this).addClass('column-'+ulChildren)
                }
            });
            
    
            /* Remove Attribute( href ) from sub-menu title in mega-menu */
            /*
            $('.mega-menu > li > a').removeAttr('href');
            */
    
    
            /* Mega Munu  */
            // $(".mega-menu").parent().css({"position": "inherit"});
            $(".mega-menu").parent().addClass("mega-menu-parent");
            
    
            /* Add space for Elementor Menu Anchor link */
            // $( window ).on( 'elementor/frontend/init', function() {
            //     elementorFrontend.hooks.addFilter( 'frontend/handlers/menu_anchor/scroll_top_distance', function( scrollTop ) {
            //         return scrollTop - 75;
            //     });
            // });
    
            /* --------------------------------------------------------
                3-2. Category Menu
            --------------------------------------------------------- */
     
            $('.ltn__category-menu-title').on('click', function(){
                $('.ltn__category-menu-toggle').slideToggle(500);
            });	
    
            /* Category Menu More Item show */
            $('.ltn__category-menu-more-item-parent').on('click', function(){
                $('.ltn__category-menu-more-item-child').slideToggle();
                $(this).toggleClass('rx-change');
    
            });
    
            /* Category Submenu Column Count */
            $('.ltn__category-submenu').each(function(){
                if($(this).children('li').length){
                    var ulChildren = $(this).children('li').length;
                    $(this).addClass('ltn__category-column-no-'+ulChildren)
                }
            });
    
            /* Category Menu Responsive */
            function ltn__CategoryMenuToggle(){
                $('.ltn__category-menu-toggle .ltn__category-menu-drop > a').on('click', function(){
                if($(window).width() < 991){
                    $(this).removeAttr('href');
                    var element = $(this).parent('li');
                    if (element.hasClass('open')) {
                        element.removeClass('open');
                        element.find('li').removeClass('open');
                        element.find('ul').slideUp();
                    }
                    else {
                        element.addClass('open');
                        element.children('ul').slideDown();
                        element.siblings('li').children('ul').slideUp();
                        element.siblings('li').removeClass('open');
                        element.siblings('li').find('li').removeClass('open');
                        element.siblings('li').find('ul').slideUp();
                    }
                }
                });
                $('.ltn__category-menu-toggle .ltn__category-menu-drop > a').append('<span className="expand"></span>');
            }
            ltn__CategoryMenuToggle();
    
    
            /* ---------------------------------------------------------
                4. One Page Navigation ($ Easing Plugin )
            --------------------------------------------------------- */
            //$ for page scrolling feature - requires$ Easing plugin
            $(function() {
                $('a.page-scroll').bind('click', function(event) {
                    var $anchor = $(this);
                    $('html, body').stop().animate({
                        scrollTop: $($anchor.attr('href')).offset().top
                    }, 1500, 'easeInOutExpo');
                    event.preventDefault();
                });
            });
    
    
            /* --------------------------------------------------------
                5. Toogle Search
            -------------------------------------------------------- */
            // Handle click on toggle search button
            $('.header-search-1').on('click', function() {
                $('.header-search-1, .header-search-1-form').toggleClass('search-open');
                return false;
            });
    
    
            /* ---------------------------------------------------------
                6. Current Year Copyright area
            --------------------------------------------------------- */
            $(".current-year").text((new Date).getFullYear());
    
    
            /* ---------------------------------------------------------
                7. Background Image
            --------------------------------------------------------- */
            var $backgroundImage = $('.bg-image, .bg-image-top');
            $backgroundImage.each(function() {
                var $this = $(this),
                    $bgImage = $this.data('bs-bg');
                $this.css('background-image', 'url('+$bgImage+')');
            });
    

        });
    
              
    })($);

},[]) 




   //form validaqtion using formik edit user (include admin)
   const formik = useFormik({
    initialValues: {
        username : params.value1.username,
        email : params.value1.email, 
        mobileNO : params.value1.mobileNO,  
        },

    validationSchema:Yup.object().shape({

      username : Yup.string().required("userName Required"),

      email : Yup.string().matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, 'Invalid email address').required("Email Required"),

      mobileNO : Yup.string().required('Phone number is required').matches(/^\d+$/, 'Phone number must only contain numbers').min(10, 'Phone number must be exactly 10 digits').max(10, 'Phone number must be exactly 10 digits')

        }),

    onSubmit: async(values, {resetForm})=>{
        //console.log("admin", values);
       
        await axios.put(`${server_access_point}/edituser/${params.value1._id}`, values).then(res=>
        {
            alert(res.data.message); 

            resetForm({values : ""});

        }).catch(err=>console.log(err));
        
    }               

})


//edit user


 const handleeditUser = (data)=>{
    navigate("/edituser", {state : data})
  }

 //handle Delete user

 const handleDeleteuser = async(list)=>{
    let response = window.confirm(` Want to Delete This User #${list.username}`);

    if(response){
    axios.delete(`${server_access_point}/deleteuser/${list._id}`).then(res=>setAllUsers(res.data)).catch(err=>console.log(err));
    }
    
  }








  //formik for category
  const formikCategory = useFormik({
    initialValues : {
        category : ""      
    },
    validationSchema : Yup.object({
        category : Yup.string().required("Enter Category")
    }),
    onSubmit : async(values, {resetForm})=>{
        //console.log("values", values)
        await axios.post(`${server_access_point}/category`, values).then(res=>alert(res.data.message)).catch(err => console.log(err));

        resetForm({values : ""});
    } 
})


//handle Delete category

const handleDeleteCategory = async(list)=>{
    //console.log("list", list)
    let response = window.confirm(` Want to Delete This #${list.category}`);

    if(response){
    await axios.delete(`${server_access_point}/deletecategory/${list._id}`).then(res=>{
        setAllCategory(res.data.categoryData);
    }).catch(err=>console.log(err));
    }
    
  }

 //handle open Edit CategoryModal

 const [categoryID, setCategoryID] = useState("");
 const [categoryType, setCategoryType] = useState("");

 const openEditCategoryModal = (list)=>{
    setCategoryID(list._id);
    setCategoryType(list.category);
 }

    //formik for edit category 
    const formikEditCategory = useFormik({
        initialValues : {
            category : ""      
        },
        validationSchema : Yup.object({
            category : Yup.string().required("Enter New Category")
        }),
        onSubmit : async(values, {resetForm})=>{
            //console.log("values", values)
            await axios.put(`${server_access_point}/editcategory/${categoryID}`, values).then(res=>alert(res.data.message)).catch(err => console.log(err));
    
            resetForm({values : ""});
        } 
    })










  //formik for products

   const productformik = useFormik({
    initialValues: {
        productimg : [],
        productname : "",
        productcategory : "", 
        productprice : "",
        productquantity : "",
        productdescription : ""  
        },

    validationSchema:Yup.object().shape({

        productimg :  Yup.array().min(1,  'Please select at least one file')
        .of(
            Yup.mixed()
              .test('fileType', 'Only image files are allowed', (value) => {
                return value && ['image/jpeg', 'image/png', 'image/jpg'].includes(value.type);
              })
              .test('fileSize', 'File size should be below 1MB', (value) => {
                return value && value.size <= 1048576; // 1MB = 1048576 bytes
              })
          ),

      productname : Yup.string().required("Product Name Required"),

      productcategory : Yup.string().required("Select Category"),

      productprice : Yup.string().required('Product Price Required'),
      productquantity : Yup.string().required("Specify Quantity"),
      productdescription : Yup.string()

        }),

    onSubmit: async(values, {resetForm})=>{
        console.log("product", values);
 
        const formData = new FormData();
            for (let i = 0; i < values.productimg.length; i++) {
                formData.append('productimg', values.productimg[i]);
            }

            formData.append("productname",values.productname)
            formData.append("productcategory",values.productcategory)
            formData.append("productprice", values.productprice)
            formData.append("productquantity",values.productquantity)
            formData.append("productdescription", values.productdescription)
       
        await axios.post(`${server_access_point}/products`, formData).then(res=>
        {
            alert(res.data.message); 

            resetForm({values : ""});

        }).catch(err=>console.log(err));
        
    }               

})

//handle Image Change
const handleImageChange = (e)=>{
    const selectedImages = Array.from(e.target.files);
    productformik.setFieldValue('productimg', [...productformik.values.productimg, ...selectedImages]);
  
}

//handle Delete ProductImg
const handleDeleteProductImg = (index)=>{
    productformik.setFieldValue(
        'productimg',
        productformik.values.productimg.filter((_, i) => i !== index)
      );
}


//handle EditProduct

const handleEditProduct = (data)=>{
    navigate("/editproduct", {state : data})
  }

//handle Delete product

const handleDeleteproduct = async(list)=>{
    let response = window.confirm(` Want to Delete This #${list.productname}`);

    if(response){
    await axios.delete(`${server_access_point}/deleteproduct/${list._id}`).then(res=>{
        setAllProducts(res.data.productData);
    }).catch(err=>console.log(err));
    }
}


  return (
    
    <div>

    {/* Body main wrapper start */}
    <div className="body-wrapper">

        {/*================ Start Header Menu Area =================*/}  
	<header className="header_area">
    <div className="main_menu">

      {/* navbar start */}
        <Navbar value2 = {params.value2}/>
      {/* navbar end */}

    </div>
  </header>
	{/*================ End Header Menu Area =================*/}


        {/* BREADCRUMB AREA START */}
        
           
        <section className="blog-banner-area mb-30" id="contact">
          <div className="container h-100">
            <div className="blog-banner">
              <div className="text-center">
                <h1>{params.value1.userType} Dashboard</h1>
                <nav aria-label="breadcrumb" className="banner-breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">Hello, {params.value1.username}</li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </section>
            
       
        {/* BREADCRUMB AREA END */}

        {/* WISHLIST AREA START */}
        <div className="liton__wishlist-area pb-70">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        {/* PRODUCT TAB AREA START */}
                        <div className="ltn__product-tab-area">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-4">
                                        <div className="ltn__tab-menu-list mb-50">
                                            <div className="nav">
                                                <a className="active show" data-bs-toggle ="tab" href="#liton_tab_1_1">Dashboard <i className="fas fa-home"></i></a>
                                                <a data-bs-toggle ="tab" href="#liton_tab_1_5">Edit Profile<i className="fas fa-user-tie"></i></a>

                                                {params.value1.userType === "admin" && 
                                                <>
                                                    <a data-bs-toggle ="tab" href="#liton_tab_1_8">All Users <i className="fas fa-users"></i></a>                                            
                                                    <a data-bs-toggle ="tab" href="#liton_tab_1_2">Add Categories <i class="fas fa-wrench"></i></a>
                                                    <a data-bs-toggle ="tab" href="#liton_tab_1_9">Add products<i className="fas fa-arrow-down"></i></a>
                                                    <a data-bs-toggle ="tab" href="#liton_tab_1_3">All products<i className="fas fa-arrow-down"></i></a>
                                                    <a data-bs-toggle ="tab" href="#liton_tab_1_4">All Payments <i className="fas fa-car-side"></i></a>
                                                </>
                                                }

                                                <a data-bs-toggle ="tab" href="#liton_tab_1_6">All Orders <i class="fas fa-file-invoice"></i></a>
                                                <a data-bs-toggle ="tab"  onClick={params.value2}> Logout <i className="fas fa-sign-out-alt"></i></a>
                                            
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-8">
                                        <div className="tab-content">

                                            <div className="tab-pane fade" id="liton_tab_1_5">
                                                <div className="ltn__myaccount-tab-content-inner">
                                                    <p>Edit {params.value1.userType} Profile...</p>

                                                    <div className="ltn__form-box">

                                                        <form onSubmit={formik.handleSubmit}>
                                                            <div className="row mb-50">

                                                                <div className="col-md-6">
                                                                    <label>Name:</label>

                                                                    <input type="text" name="username" placeholder="Name" value={formik.values.username} onChange={formik.handleChange}/> 

                                                                    {(formik.touched.username && formik.errors.username) && <small style={{color:"red"}}>{formik.errors.username}</small>}

                                                                </div>

                                                                {params.value1.userType === "admin" && 

                                                                <>
                                                                    <div className="col-md-6">
                                                                        <label>Email:</label>

                                                                        <input type="email" name="email" placeholder="Email*"  value={formik.values.email} onChange={formik.handleChange} />

                                                                        {(formik.touched.email && formik.errors.email) && <small style={{color:"red"}}>{formik.errors.email}</small>}
                                                                
                                                                    </div> 
                                                                </>
                                                                }

                                                                <div className="col-md-6">
                                                                    <label>Mobile Number:</label> 

                                                                    <input type="text" inputMode="numeric" pattern="[0-9]*" name="mobileNO" placeholder="Mobile No..." value={formik.values.mobileNO} onChange={formik.handleChange} />

                                                                    {(formik.touched.mobileNO && formik.errors.mobileNO) && <small style={{color:"red"}}>{formik.errors.mobileNO}</small>}

                                                                </div>
                                                           
                                                                
                                                            </div>

                                                            {/* <fieldset>
                                                                <legend>Password change</legend>
                                                                <div className="row">
                                                                    <div className="col-md-12">
                                                                        <label>Current password (leave blank to leave unchanged):</label>
                                                                        <input type="password" name="ltn__name" />
                                                                        <label>New password (leave blank to leave unchanged):</label>
                                                                        <input type="password" name="ltn__lastname" />
                                                                        <label>Confirm new password:</label>
                                                                        <input type="password" name="ltn__lastname" />
                                                                    </div>
                                                                </div>
                                                            </fieldset> */}

                                                            <div className="btn-wrapper">
                                                                <button type="submit" className="btn theme-btn-1 btn-effect-1 text-uppercase">Save Changes</button>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>

                                      

                                            <div className="tab-pane fade" id="liton_tab_1_8"> 
                                                <div className="ltn__myaccount-tab-content-inner">
                                                    <p>All <strong>Users</strong>.</p>
                                                </div>

                                                <div className="ltn__myaccount-tab-content-inner">
                                                    
                                                    <div className="table-responsive">
                                                        <table className="table">
                                                            <thead>
                                                                <tr>
                                                                    <th>User Name</th>
                                                                    <th>Email</th>
                                                                    <th>Date</th>
                                                                    <th>Action</th>
                                                                </tr>
                                                            </thead>

                                                            {allusers.length > 0 ?  allusers.map(list=>
                                                            <tbody key={list._id}>
                                                                <tr>
                                                                    <td>{list.username}</td>
                                                                    <td>{list.email}</td>
                                                                    <td>{new Date(list.date).toDateString()}</td>
                                                                    <td> 
                                                                        <button type='button' onClick={()=>handleDeleteuser(list)} >
                                                                        <i class="fas fa-trash"></i>
                                                                        </button>
                                                                         &emsp;
                                                                        <button type='button' onClick={()=>handleeditUser(list)} >
                                                                        <i class="fas fa-edit"></i>
                                                                        </button>
                                                                        
                                                                    </td>                                                                   
                                                                </tr>
                                                                
                                                            </tbody>
                                                            )
                                                        :
                                                        <div className="table">
                                                            <p>No Data...</p>
                                                        </div>
                                                        }
                                                        </table>
                                                    </div>
                                                </div>
                                            </div> 


                                            <div className="tab-pane fade active show" id="liton_tab_1_1">
                                                <div className="ltn__myaccount-tab-content-inner">
                                                    <p>Hello <strong>{params.value1.username}</strong></p>
                                                    <p>From your account dashboard you can view your <span>recent orders</span>, manage your <span>shipping and billing addresses</span>, and <span>edit your password and account details</span>.</p>
                                                </div>
                                            </div>

                                            <div className="tab-pane fade" id="liton_tab_1_2"> 
                                                <div className='row'>

                                                    <div className="ltn__myaccount-tab-content-inner col-lg-6 col-6">
                                                        <p>All <strong>Categories</strong>.</p>

                                                    </div>

                                                    <div className="ltn__myaccount-tab-content-inner col-lg-6 col-6">
                                                        <button className='btn btn-success'  data-bs-toggle="modal" data-bs-target="#addCategoryModel"> <i className="fas fa-plus"></i> Add Catrgory</button>
                                                    </div>

                                                </div>
                                                                                             

                                                <div className="ltn__myaccount-tab-content-inner">
                                                    
                                                    <div className="table-responsive">
                                                        <table className="table">
                                                            <thead>
                                                                <tr>
                                                                    <th>Category</th>
                                                                    <th>Date</th>
                                                                    <th>Action</th>
                                                                </tr>
                                                            </thead>

                                                            {allCategoty.length > 0 ?  allCategoty.map(list=>
                                                            <tbody key={list._id}>
                                                                <tr>
                                                                    <td>{list.category}</td>
                                                                    <td>{new Date(list.date).toDateString()}</td>
                                                                    <td> 
                                                                        <button type='button' onClick={()=>handleDeleteCategory(list)} >
                                                                        <i class="fas fa-trash"></i>
                                                                        </button>
                                                                         &emsp;
                                                                        <button type='button' data-bs-toggle="modal" data-bs-target="#editCategoryModel" onClick={() => openEditCategoryModal(list)}>
                                                                        <i class="fas fa-edit"></i>
                                                                        </button>
                                                                        
                                                                    </td>                                                                   
                                                                </tr>
                                                                
                                                            </tbody>
                                                            )
                                                        :
                                                        <div className="table">
                                                            <p>No Data...</p>
                                                        </div>
                                                        }
                                                        </table>
                                                    </div>
                                                </div>
                                            </div> 


                                            <div className="tab-pane fade" id="liton_tab_1_3"> 
                                                <div className="ltn__myaccount-tab-content-inner">
                                                    <p>All <strong>Products</strong>.</p>
                                                </div>

                                                <div className="ltn__myaccount-tab-content-inner">
                                                    
                                                    <div className="table-responsive">
                                                        <table className="table">
                                                            <thead>
                                                                <tr>
                                                                    <th>Product Img</th>
                                                                    <th>Product Name</th>
                                                                    <th>Product Price</th>
                                                                    <th>Product Category</th>                                                                   
                                                                    <th>Date</th>
                                                                    <th>Action</th>
                                                                </tr>
                                                            </thead>

                                                            {allProducts.length > 0 ?  allProducts.map(list=>
                                                            <tbody key={list._id}>
                                                                <tr>
                                                                    <td><img className='captureImg' src={`${server_access_point}/productImages/${list.productimg[0]}`} alt='image'/></td>
                                                                    <td>{list.productname}</td>
                                                                    <td>{list.productprice}</td>
                                                                    <td>{list.productcategory}</td>
                                                                    <td>{new Date(list.date).toDateString()}</td>
                                                                    <td> 
                                                                        <button type='button' onClick={()=>handleDeleteproduct(list)} >
                                                                        <i class="fas fa-trash"></i>
                                                                        </button>
                                                                         &emsp;
                                                                        <button type='button' onClick={()=>handleEditProduct(list)} >
                                                                        <i class="fas fa-edit"></i>
                                                                        </button>
                                                                        
                                                                    </td>                                                                   
                                                                </tr>
                                                                
                                                            </tbody>
                                                            )
                                                        :
                                                        <div className="table">
                                                            <p>No Data...</p>
                                                        </div>
                                                        }
                                                        </table>
                                                    </div>
                                                </div>
                                            </div> 

                                            <div className="tab-pane fade" id="liton_tab_1_4"> 
                                                <div className="ltn__myaccount-tab-content-inner">
                                                    <p>All <strong>Users</strong>.</p>
                                                </div>

                                                <div className="ltn__myaccount-tab-content-inner">
                                                    
                                                    <div className="table-responsive">
                                                        <table className="table">
                                                            <thead>
                                                                <tr>
                                                                    <th>User Name</th>
                                                                    <th>Email</th>
                                                                    <th>Date</th>
                                                                    <th>Action</th>
                                                                </tr>
                                                            </thead>

                                                            {allusers.length > 0 ?  allusers.map(list=>
                                                            <tbody key={list._id}>
                                                                <tr>
                                                                    <td>{list.username}</td>
                                                                    <td>{list.email}</td>
                                                                    <td>{new Date(list.date).toDateString()}</td>
                                                                    <td> 
                                                                        <button type='button' onClick={()=>handleDeleteuser(list)} >
                                                                        <i class="fas fa-trash"></i>
                                                                        </button>
                                                                         &emsp;
                                                                        <button type='button' onClick={()=>editUserData(list)} >
                                                                        <i class="fas fa-edit"></i>
                                                                        </button>
                                                                        
                                                                    </td>                                                                   
                                                                </tr>
                                                                
                                                            </tbody>
                                                            )
                                                        :
                                                        <div className="table">
                                                            <p>No Data...</p>
                                                        </div>
                                                        }
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>

                                             {/* <div className="tab-pane fade" id="liton_tab_1_6"> 
                                                <div className="ltn__myaccount-tab-content-inner">
                                                    <p>All <strong>Users</strong>.</p>
                                                </div>

                                                <div className="ltn__myaccount-tab-content-inner">
                                                    
                                                    <div className="table-responsive">
                                                        <table className="table">
                                                            <thead>
                                                                <tr>
                                                                    <th>User Name</th>
                                                                    <th>Email</th>
                                                                    <th>Date</th>
                                                                    <th>Action</th>
                                                                </tr>
                                                            </thead>

                                                            {allusers.length > 0 ?  allusers.map(list=>
                                                            <tbody key={list._id}>
                                                                <tr>
                                                                    <td>{list.username}</td>
                                                                    <td>{list.email}</td>
                                                                    <td>{new Date(list.date).toDateString()}</td>
                                                                    <td> 
                                                                        <button type='button' onClick={()=>handleDeleteuser(list)} >
                                                                        <i class="fas fa-trash"></i>
                                                                        </button>
                                                                         &emsp;
                                                                        <button type='button' onClick={()=>handleeditUser(list)} >
                                                                        <i class="fas fa-edit"></i>
                                                                        </button>
                                                                        
                                                                    </td>                                                                   
                                                                </tr>
                                                                
                                                            </tbody>
                                                            )
                                                        :
                                                        <div className="table">
                                                            <p>No Data...</p>
                                                        </div>
                                                        }
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>  */}

                                            <div className="tab-pane fade" id="liton_tab_1_9">
                                                <div className="ltn__myaccount-tab-content-inner">
                                                    <p>Add Products...</p>

                                                    <div className="ltn__form-box">

                                                        <form onSubmit={productformik.handleSubmit} enctype="multipart/form-data" autoComplete='off'>
                                                            <div className="row mb-50">

                                                                <div className="col-md-6">
                                                                    <label>Product Name:</label>

                                                                    <input type="text" name="productname" placeholder="Product Name" value={productformik.values.productname} onChange={productformik.handleChange}/> 

                                                                    {(productformik.touched.productname && productformik.errors.productname) && <small style={{color:"red"}}>{productformik.errors.productname}</small>}

                                                                </div>

                                                               
                                                                <div className="col-md-6">
                                                                    <label>Product Category</label><br />

                                                                    <select name='productcategory' onChange={productformik.handleChange}>
                                                                        <option> --- Select Category ---</option>
                                                                        {allCategoty.length > 0 &&allCategoty.map(list=>
                                                                            <option key={list._id} value={list.category}>{list.category}</option>)}
                                                                        
                                                                    </select>

                                                                    {(productformik.touched.productcategory && productformik.errors.productcategory) && <small style={{color:"red"}}>{productformik.errors.productcategory}</small>}
                                                            
                                                                </div> 
                                                                

                                                                <div className="col-md-6">
                                                                    <label>Product Price</label> 

                                                                    <input type="text" inputMode="numeric" pattern="[0-9]*" name="productprice" placeholder="Product Price" value={productformik.values.productprice} onChange={productformik.handleChange} />

                                                                    {(productformik.touched.productprice && productformik.errors.productprice) && <small style={{color:"red"}}>{productformik.errors.productprice}</small>}

                                                                </div>

                                                                <div className="col-md-6">
                                                                    <label>Product Quantity:</label>

                                                                    <input type="text" inputMode="numeric" pattern="[0-9]*" name="productquantity" placeholder="Product Quantity" value={productformik.values.productquantity} onChange={productformik.handleChange}/> 

                                                                    {(productformik.touched.productquantity && productformik.errors.productquantity) && <small style={{color:"red"}}>{productformik.errors.productquantity}</small>}

                                                                </div>

                                                                <div className="col-md-6">
                                                                    <label>Product Description:</label>

                                                                    <input type="text" name="productdescription" placeholder="Product Description" value={productformik.values.productdescription} onChange={productformik.handleChange}/> 

                                                                    {(productformik.touched.productdescription && productformik.errors.productdescription) && <small style={{color:"red"}}>{productformik.errors.productdescription}</small>}

                                                                </div>

                                                               

                                                                <div className="dropzone mb-3"> 
                                                                    <div className="fallback">
                                                                        <input name="productimg" type="file"  onChange={handleImageChange}  multiple= "multiple" />
                                                                        {(productformik.errors.productimg && productformik.touched.productimg)  ? <div style={{color:"red"}}>{productformik.errors.productimg}</div> : null}

                                                                        <div  style={{ display: 'flex', flexWrap: 'wrap'}}>
                                                                            {productformik.values.productimg && Array.from(productformik.values.productimg).map((image, index) => (
                                                                                <div className='position-relative m-3' key={index} >
                                                                                    <img
                                                                                        key={index}
                                                                                        src={URL.createObjectURL(image)}
                                                                                        alt={`Image ${index + 1}`}
                                                                                        style={{ width: '100px', height: '100px', objectFit: 'cover' }}
                                                                                    />
                                                                                    <button type='button' className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" 
                                                                                    onClick={()=>handleDeleteProductImg(index)}><i className="fas fa-trash"></i></button>
                                                                                </div>
                                                                            ))}
                                                                        </div>

                                                                        {/* {(productformik.errors.productimg) && <small style={{color:"red"}}>{productformik.errors.productimg}</small>} */}
                                                                      
                                                                        
                                                                        
                                                                    </div>
                                                                </div>
                                                           
                                                                
                                                            </div>

                                                           

                                                            <div className="btn-wrapper">
                                                                <button type="submit" className="btn theme-btn-1 btn-effect-1 text-uppercase"><i className="fas fa-plus"></i> Add Product</button>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>


                                            {/* <div className="tab-pane fade" id="liton_tab_1_4">
                                                <div className="ltn__myaccount-tab-content-inner">
                                                    <p>No Data Found...</p>
                                                    <div className="row">
                                                        <div className="col-md-6 col-12 learts-mb-30">
                                                            <h4>Billing Address <small><a href="#">edit</a></small></h4>
                                                            <address>
                                                                <p><strong>Alex Tuntuni</strong></p>
                                                                <p>1355 Market St, Suite 900 <br />
                                                                    San Francisco, CA 94103</p>
                                                                <p>Mobile: (123) 456-7890</p>
                                                            </address>
                                                        </div>
                                                        <div className="col-md-6 col-12 learts-mb-30">
                                                            <h4>Shipping Address <small><a href="#">edit</a></small></h4>
                                                            <address>
                                                                <p><strong>Alex Tuntuni</strong></p>
                                                                <p>1355 Market St, Suite 900 <br />
                                                                    San Francisco, CA 94103</p>
                                                                <p>Mobile: (123) 456-7890</p>
                                                            </address>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div> */}

                                            


                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* PRODUCT TAB AREA END */}
                    </div>
                </div>
            </div>
        </div>
        {/* WISHLIST AREA START */}


          {/* Modal */}
            <div className="modal fade" id="addCategoryModel" tabIndex="-1" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content border-0">
                        <div className="modal-header p-4 pb-0">
                            <h5 className="modal-title" id="createMemberLabel">Add Category</h5>
                            <button type="button" className="btn-close" id="createMemberBtn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body p-4">

                            <form autocomplete="off" id="memberlist-form" className="needs-validation" onSubmit={formikCategory.handleSubmit} enctype="multipart/form-data">
                                <div className="row">
                                    <div className="col-lg-12">
                                        

                                        <div className="mb-3 mt-4">
                                            <label htmlFor="producttype" className="form-label">Category</label>
                                            <input type="text" className="form-control" id="producttype" placeholder="Enter Category" name='category' value={formikCategory.values.category} onChange={formikCategory.handleChange} />
                                            <div className="invalid-feedback">Please Enter a Product category.</div>
                                        </div>
                                        {(formikCategory.touched.category && formikCategory.errors.category) ? <small style={{color:"red"}}>{formikCategory.errors.category}</small> : null}


                                        <div className="hstack gap-2 justify-content-end">
                                            <button type="button" className="btn btn-light" data-bs-dismiss="modal">Close</button>
                                            <button type="submit" className="btn btn-success" id="addNewMember">Add Category</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                {/*end modal-content*/}
                </div>
            {/*end modal-dialog*/}
            </div>
          {/*end modal*/}


           {/* edit category Modal */}
           <div className="modal fade" id="editCategoryModel" tabIndex="-1" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content border-0">
                        <div className="modal-header p-4 pb-0">
                            <h5 className="modal-title" id="createMemberLabel">Edit Category</h5>
                            <button type="button" className="btn-close" id="createMemberBtn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body p-4">

                            <form autocomplete="off" id="memberlist-form" className="needs-validation" onSubmit={formikEditCategory.handleSubmit} >
                                <div className="row">
                                    <div className="col-lg-12">
                                    
                                        
                                    <div className="mb-3 mt-4">
                                            <label htmlFor="producttype" className="form-label">Old Category</label>
                                            <input type="text" className="form-control" id="producttype" value={categoryType} readOnly />
                                        </div>


                                        <div className="mb-3 mt-4">
                                            <label htmlFor="producttype" className="form-label">New Category</label>
                                            <input type="text" className="form-control" id="producttype" placeholder="Enter New Category" name='category' value={formikEditCategory.values.category} onChange={formikEditCategory.handleChange} />
                                            <div className="invalid-feedback">Please Enter a Product category.</div>
                                        </div>
                                        {(formikEditCategory.touched.category && formikEditCategory.errors.category) ? <small style={{color:"red"}}>{formikEditCategory.errors.category}</small> : null}


                                        <div className="hstack gap-2 justify-content-end">
                                            <button type="button" className="btn btn-light" data-bs-dismiss="modal">Close</button>
                                            <button type="submit" className="btn btn-success" id="addNewMember">Edit Category</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                {/*end modal-content*/}
                </div>
            {/*end modal-dialog*/}
            </div>
          {/*end edit category modal*/}


       

         {/* mechanic edit model end */}

        {/* FOOTER AREA START (ltn__footer-2 ltn__footer-color-1) */}
        <Footer />
        {/* FOOTER AREA END */}
    </div>
    {/* Body main wrapper end */}

   



</div>
  )
}

export default ChildDashboard