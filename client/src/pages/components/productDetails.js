import React, {useContext, useState, useEffect} from 'react'
import Footer from './reUseModules/footer'
import Navbar from './reUseModules/navbar'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { useFormik } from 'formik'
import * as Yup from "yup"
import "../../App.css"
import axios from "axios"

import { userstore } from '../../App'

import { server_access_point } from './config'

const ProductDetails = () => {

	const [resdata, setresdata] = useState([]); 


	useEffect(()=>{ 
        axios.get(`${server_access_point}/productdetails`, {
            headers :{
                "x-access-token" : localStorage.getItem("webtoken")
            }
        }).then(res => {
            setresdata(res.data.data);
           
        }).catch(err => console.log(err));
      
    },[]) 

    //no token 
    if(!localStorage.getItem("webtoken")){
      return <Navigate to="/signin" /> 
  }


	const location = useLocation();

	let productData = location.state;
	//console.log("img", productData);

	const [changeImg, SetChangeImg] = useState(productData.productimg[0]);

	//handle ImageChange

	const handleImageChange = (img)=>{
		SetChangeImg(img)
	}


	//formik for product added to cart

	
	const formik = useFormik({
		initialValues: {
			productimg : [...productData.productimg],
			productname : productData.productname,
			productcategory : productData.productcategory, 
			productprice : productData.productprice,
			enterquantity : "",
			productdescription : productData.productdescription,
			totalamount : "",
			username : "",
			useremail :  ""
			},
	
		validationSchema:Yup.object().shape({
			enterquantity : Yup.string().required("Enter Quantity")
	
			}),
	
		onSubmit: async(values, {resetForm})=>{
			//console.log("product", values);
		   
			await axios.post(`${server_access_point}/addtocart`, values).then(res=>
			{
				alert(res.data.message); 
	
				resetForm({values : ""});
	
			}).catch(err=>console.log(err));
			
		}               
	
	})


	// handleChangeQuantityChange

	const handleChangeQuantityChange = (e)=>{
		formik.setFieldValue("enterquantity", e.target.value);
		formik.setFieldValue("totalamount", (Number(e.target.value) * Number(productData.productprice)).toString());
		formik.setFieldValue("useremail", resdata.email);
		formik.setFieldValue("username", resdata.username); 
	}

  return (
    
    <div>
	{/*================ Start Header Menu Area =================*/}
	<header className="header_area">
    <div className="main_menu">

      {/* navbar start */}
        <Navbar />
      {/* navbar end */}

    </div>
  </header>
	{/*================ End Header Menu Area =================*/}
	
	{/* ================ start banner area ================= */}	
	<section className="blog-banner-area" id="blog">
		<div className="container h-100">
			<div className="blog-banner">
				<div className="text-center">
					<h1>Product Details</h1>
					<nav aria-label="breadcrumb" className="banner-breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><Link to="/" >Home</Link></li>
              <li className="breadcrumb-item active" aria-current="page">Product Details</li>
            </ol>
          </nav>
				</div>
			</div>
    </div>
	</section>
	{/* ================ end banner area ================= */}


  {/*================Single Product Area =================*/}
	<div className="product_image_area">
		<div className="container">
			<div className="row s_product_inner">
				<div className="col-lg-6">

					<div className=" owl-theme s_Product_carousel"> {/*owl-carousel*/}
						<div className="single-prd-item" >
							<img className="img-fluid image_preview_inproductdetails" src={`${server_access_point}/productImages/${changeImg}`} alt="no img" />
						</div>
						
						{/* <div className="single-prd-item">
							<img className="img-fluid" src="img/category/s-p1.jpg" alt="" />
						</div> */}
					</div>

					<div className='row' style={{height:"13em", paddingTop:"2em"}}>
						{productData.productimg.length > 0 && productData.productimg.map((list, index)=>

							<div className='col-lg-4 col-4'key={index}>
								<img className="img-fluid image_preview1" style={{cursor:"pointer"}} src={`${server_access_point}/productImages/${list}`} alt="" onClick={()=>handleImageChange(list)}/>
							</div>
						)}						

					</div>
					
				</div>


				<div className="col-lg-5 offset-lg-1">
					<div className="s_product_text">
						<h3>{productData.productname}</h3>
						<h2>&#x20B9; {productData.productprice} /-</h2>
						<ul className="list">
							<li><a className="active" href="#"><span>Category</span> : {productData.productcategory}</a></li>
							<li><a href="#"><span>Availibility</span> : In Stock</a></li>
						</ul>
						<p>{productData.productdescription}</p>

						<div className="product_count">

							<form onSubmit={formik.handleSubmit}>
								<label htmlFor="qty">Quantity:</label>

								{/* <button className="increase items-count" type="button"><i className="ti-angle-left"></i></button> */}

								<input type="text" name="enterquantity" id="qty" size="2" maxlength="12" value={formik.values.enterquantity} onChange={handleChangeQuantityChange} title="Quantity:" className="input-text qty" placeholder='Enter Quantity'/>

								{(formik.errors.enterquantity && formik.touched.enterquantity) && <div style={{color:"red"}}>{formik.errors.enterquantity}</div>}

								<button className="button_default_style" style={{padding:"15px 35px", backgroundColor:"green", borderRadius:"30px", fontWeight:"bolder"}}>Add To Cart</button>

								{/* <button className="reduced items-count" type="button"><i className="ti-angle-right"></i></button> */}


								{/* <a className="button primary-btn">Add To Cart</a>       */}
							</form>
              				
						</div>

						<div className="card_area d-flex align-items-center" style={{marginTop:"50px"}}>
							<a className="icon_btn" href="#"><i className="lnr lnr lnr-diamond"></i></a>
							<a className="icon_btn" href="#"><i className="lnr lnr lnr-heart"></i></a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	{/*================End Single Product Area =================*/}

	{/*================Product Description Area =================*/}
	<section className="product_description_area">
		<div className="container">
			<ul className="nav nav-tabs" id="myTab" role="tablist">
				<li className="nav-item">
					<a className="nav-link" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Description</a>
				</li>
				<li className="nav-item">
					<a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile"
					 aria-selected="false">Specification</a>
				</li>
				<li className="nav-item">
					<a className="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact"
					 aria-selected="false">Comments</a>
				</li>
				<li className="nav-item">
					<a className="nav-link active" id="review-tab" data-toggle="tab" href="#review" role="tab" aria-controls="review"
					 aria-selected="false">Reviews</a>
				</li>
			</ul>
			<div className="tab-content" id="myTabContent">
				<div className="tab-pane fade" id="home" role="tabpanel" aria-labelledby="home-tab">
					<p>{productData.productdescription}</p>
					
				</div>
				<div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
					<div className="table-responsive">
						<table className="table">
							<tbody>
								<tr>
									<td>
										<h5>Width</h5>
									</td>
									<td>
										<h5>128mm</h5>
									</td>
								</tr>
								<tr>
									<td>
										<h5>Height</h5>
									</td>
									<td>
										<h5>508mm</h5>
									</td>
								</tr>
								<tr>
									<td>
										<h5>Depth</h5>
									</td>
									<td>
										<h5>85mm</h5>
									</td>
								</tr>
								<tr>
									<td>
										<h5>Weight</h5>
									</td>
									<td>
										<h5>52gm</h5>
									</td>
								</tr>
								<tr>
									<td>
										<h5>Quality checking</h5>
									</td>
									<td>
										<h5>yes</h5>
									</td>
								</tr>
								<tr>
									<td>
										<h5>Freshness Duration</h5>
									</td>
									<td>
										<h5>03days</h5>
									</td>
								</tr>
								<tr>
									<td>
										<h5>When packeting</h5>
									</td>
									<td>
										<h5>Without touch of hand</h5>
									</td>
								</tr>
								<tr>
									<td>
										<h5>Each Box contains</h5>
									</td>
									<td>
										<h5>60pcs</h5>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
					<div className="row">
						<div className="col-lg-6">
							<div className="comment_list">
								<div className="review_item">
									<div className="media">
										<div className="d-flex">
											<img src="assets/img/product/review-1.png" alt="" />
										</div>
										<div className="media-body">
											<h4>Blake Ruiz</h4>
											<h5>12th Feb, 2018 at 05:56 pm</h5>
											<a className="reply_btn" href="#">Reply</a>
										</div>
									</div>
									<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
										dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
										commodo</p>
								</div>
								<div className="review_item reply">
									<div className="media">
										<div className="d-flex">
											<img src="assets/img/product/review-2.png" alt="" />
										</div>
										<div className="media-body">
											<h4>Blake Ruiz</h4>
											<h5>12th Feb, 2018 at 05:56 pm</h5>
											<a className="reply_btn" href="#">Reply</a>
										</div>
									</div>
									<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
										dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
										commodo</p>
								</div>
								<div className="review_item">
									<div className="media">
										<div className="d-flex">
											<img src="assets/img/product/review-3.png" alt="" />
										</div>
										<div className="media-body">
											<h4>Blake Ruiz</h4>
											<h5>12th Feb, 2018 at 05:56 pm</h5>
											<a className="reply_btn" href="#">Reply</a>
										</div>
									</div>
									<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
										dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
										commodo</p>
								</div>
							</div>
						</div>
						<div className="col-lg-6">
							<div className="review_box">
								<h4>Post a comment</h4>
								<form className="row contact_form" action="contact_process.php" method="post" id="contactForm" novalidate="novalidate">
									<div className="col-md-12">
										<div className="form-group">
											<input type="text" className="form-control" id="name" name="name" placeholder="Your Full name" />
										</div>
									</div>
									<div className="col-md-12">
										<div className="form-group">
											<input type="email" className="form-control" id="email" name="email" placeholder="Email Address" />
										</div>
									</div>
									<div className="col-md-12">
										<div className="form-group">
											<input type="text" className="form-control" id="number" name="number" placeholder="Phone Number" />
										</div>
									</div>
									<div className="col-md-12">
										<div className="form-group">
											<textarea className="form-control" name="message" id="message" rows="1" placeholder="Message"></textarea>
										</div>
									</div>
									<div className="col-md-12 text-right">
										<button type="submit" value="submit" className="btn primary-btn">Submit Now</button>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
				<div className="tab-pane fade show active" id="review" role="tabpanel" aria-labelledby="review-tab">
					<div className="row">
						<div className="col-lg-6">
							<div className="row total_rate">
								<div className="col-6">
									<div className="box_total">
										<h5>Overall</h5>
										<h4>4.0</h4>
										<h6>(03 Reviews)</h6>
									</div>
								</div>
								<div className="col-6">
									<div className="rating_list">
										<h3>Based on 3 Reviews</h3>
										<ul className="list">
											<li><a href="#">5 Star <i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i
													 className="fa fa-star"></i><i className="fa fa-star"></i> 01</a></li>
											<li><a href="#">4 Star <i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i
													 className="fa fa-star"></i><i className="fa fa-star"></i> 01</a></li>
											<li><a href="#">3 Star <i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i
													 className="fa fa-star"></i><i className="fa fa-star"></i> 01</a></li>
											<li><a href="#">2 Star <i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i
													 className="fa fa-star"></i><i className="fa fa-star"></i> 01</a></li>
											<li><a href="#">1 Star <i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i
													 className="fa fa-star"></i><i className="fa fa-star"></i> 01</a></li>
										</ul>
									</div>
								</div>
							</div>
							<div className="review_list">
								<div className="review_item">
									<div className="media">
										<div className="d-flex">
											<img src="assets/img/product/review-1.png" alt="" />
										</div>
										<div className="media-body">
											<h4>Blake Ruiz</h4>
											<i className="fa fa-star"></i>
											<i className="fa fa-star"></i>
											<i className="fa fa-star"></i>
											<i className="fa fa-star"></i>
											<i className="fa fa-star"></i>
										</div>
									</div>
									<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
										dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
										commodo</p>
								</div>
								<div className="review_item">
									<div className="media">
										<div className="d-flex">
											<img src="assets/img/product/review-2.png" alt="" />
										</div>
										<div className="media-body">
											<h4>Blake Ruiz</h4>
											<i className="fa fa-star"></i>
											<i className="fa fa-star"></i>
											<i className="fa fa-star"></i>
											<i className="fa fa-star"></i>
											<i className="fa fa-star"></i>
										</div>
									</div>
									<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
										dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
										commodo</p>
								</div>
								<div className="review_item">
									<div className="media">
										<div className="d-flex">
											<img src="assets/img/product/review-3.png" alt="" />
										</div>
										<div className="media-body">
											<h4>Blake Ruiz</h4>
											<i className="fa fa-star"></i>
											<i className="fa fa-star"></i>
											<i className="fa fa-star"></i>
											<i className="fa fa-star"></i>
											<i className="fa fa-star"></i>
										</div>
									</div>
									<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
										dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
										commodo</p>
								</div>
							</div>
						</div>
						<div className="col-lg-6">
							<div className="review_box">
								<h4>Add a Review</h4>
								<p>Your Rating:</p>
								<ul className="list">
									<li><a href="#"><i className="fa fa-star"></i></a></li>
									<li><a href="#"><i className="fa fa-star"></i></a></li>
									<li><a href="#"><i className="fa fa-star"></i></a></li>
									<li><a href="#"><i className="fa fa-star"></i></a></li>
									<li><a href="#"><i className="fa fa-star"></i></a></li>
								</ul>
								<p>Outstanding</p>
                <form action="#/" className="form-contact form-review mt-3">
                  <div className="form-group">
                    <input className="form-control" name="name" type="text" placeholder="Enter your name" required />
                  </div>
                  <div className="form-group">
                    <input className="form-control" name="email" type="email" placeholder="Enter email address" required />
                  </div>
                  <div className="form-group">
                    <input className="form-control" name="subject" type="text" placeholder="Enter Subject" />
                  </div>
                  <div className="form-group">
                    <textarea className="form-control different-control w-100" name="textarea" id="textarea" cols="30" rows="5" placeholder="Enter Message"></textarea>
                  </div>
                  <div className="form-group text-center text-md-right mt-3">
                    <button type="submit" className="button button--active button-review">Submit Now</button>
                  </div>
                </form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
	{/*================End Product Description Area =================*/}

	{/*================ Start related Product area =================*/}  
	{/* <section className="related-product-area section-margin--small mt-0">
		<div className="container">
			<div className="section-intro pb-60px">
        <p>Popular Item in the market</p>
        <h2>Top <span className="section-intro__style">Product</span></h2>
      </div>
			<div className="row mt-30">
        <div className="col-sm-6 col-xl-3 mb-4 mb-xl-0">
          <div className="single-search-product-wrapper">
            <div className="single-search-product d-flex">
              <a href="#"><img src="assets/img/product/product-sm-1.png" alt="" /></a>
              <div className="desc">
                  <a href="#" className="title">Gray Coffee Cup</a>
                  <div className="price">$170.00</div>
              </div>
            </div>
            <div className="single-search-product d-flex">
              <a href="#"><img src="assets/img/product/product-sm-2.png" alt="" /></a>
              <div className="desc">
                <a href="#" className="title">Gray Coffee Cup</a>
                <div className="price">$170.00</div>
              </div>
            </div>
            <div className="single-search-product d-flex">
              <a href="#"><img src="assets/img/product/product-sm-3.png" alt="" /></a>
              <div className="desc">
                <a href="#" className="title">Gray Coffee Cup</a>
                <div className="price">$170.00</div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-sm-6 col-xl-3 mb-4 mb-xl-0">
          <div className="single-search-product-wrapper">
            <div className="single-search-product d-flex">
              <a href="#"><img src="assets/img/product/product-sm-4.png" alt="" /></a>
              <div className="desc">
                  <a href="#" className="title">Gray Coffee Cup</a>
                  <div className="price">$170.00</div>
              </div>
            </div>
            <div className="single-search-product d-flex">
              <a href="#"><img src="assets/img/product/product-sm-5.png" alt="" /></a>
              <div className="desc">
                <a href="#" className="title">Gray Coffee Cup</a>
                <div className="price">$170.00</div>
              </div>
            </div>
            <div className="single-search-product d-flex">
              <a href="#"><img src="assets/img/product/product-sm-6.png" alt="" /></a>
              <div className="desc">
                <a href="#" className="title">Gray Coffee Cup</a>
                <div className="price">$170.00</div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-sm-6 col-xl-3 mb-4 mb-xl-0">
          <div className="single-search-product-wrapper">
            <div className="single-search-product d-flex">
              <a href="#"><img src="assets/img/product/product-sm-7.png" alt="" /></a>
              <div className="desc">
                  <a href="#" className="title">Gray Coffee Cup</a>
                  <div className="price">$170.00</div>
              </div>
            </div>
            <div className="single-search-product d-flex">
              <a href="#"><img src="assets/img/product/product-sm-8.png" alt="" /></a>
              <div className="desc">
                <a href="#" className="title">Gray Coffee Cup</a>
                <div className="price">$170.00</div>
              </div>
            </div>
            <div className="single-search-product d-flex">
              <a href="#"><img src="assets/img/product/product-sm-9.png" alt="" /></a>
              <div className="desc">
                <a href="#" className="title">Gray Coffee Cup</a>
                <div className="price">$170.00</div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-sm-6 col-xl-3 mb-4 mb-xl-0">
          <div className="single-search-product-wrapper">
            <div className="single-search-product d-flex">
              <a href="#"><img src="assets/img/product/product-sm-1.png" alt="" /></a>
              <div className="desc">
                  <a href="#" className="title">Gray Coffee Cup</a>
                  <div className="price">$170.00</div>
              </div>
            </div>
            <div className="single-search-product d-flex">
              <a href="#"><img src="assets/img/product/product-sm-2.png" alt="" /></a>
              <div className="desc">
                <a href="#" className="title">Gray Coffee Cup</a>
                <div className="price">$170.00</div>
              </div>
            </div>
            <div className="single-search-product d-flex">
              <a href="#"><img src="assets/img/product/product-sm-3.png" alt="" /></a>
              <div className="desc">
                <a href="#" className="title">Gray Coffee Cup</a>
                <div className="price">$170.00</div>
              </div>
            </div>
          </div>
        </div>
      </div>
		</div>
	</section> */}
	{/*================ end related Product area =================*/}  	

  {/*================ Start footer Area  =================*/}	
    <Footer />
	{/*================ End footer Area  =================*/}


</div>
  )
}

export default ProductDetails