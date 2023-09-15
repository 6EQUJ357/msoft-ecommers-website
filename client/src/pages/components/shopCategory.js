import React, {useEffect, useState} from 'react'
import Footer from './reUseModules/footer'
import Navbar from './reUseModules/navbar'
import SubscribeSection from './reUseModules/subscribeSection'
import { Link } from 'react-router-dom'
import axios from "axios"
import { server_access_point } from './config'
import { useNavigate } from 'react-router-dom'

const ShopCategory = () => {

  const navigate = useNavigate();

  const [allCategory, setAllCategory] = useState([]);

  const [allProducts, setAllProducts] = useState([]);

  useEffect(()=>{
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

  },[])


  // viewSingleProduct

  const viewSingleProduct = (data)=>{
    navigate("/productdetails", {state : data});
  }
  return (
    
    <div>
  {/*================ Start Header Menu Area =================*/}
	<header className="header_area">
    <div className="main_menu">

      {/* nav start */}
        <Navbar />
      {/* nav end */}

    </div>
  </header>
	{/*================ End Header Menu Area =================*/}

	{/* ================ start banner area ================= */}	
	<section className="blog-banner-area" id="category">
		<div className="container h-100">
			<div className="blog-banner">
				<div className="text-center">
					<h1>Shop Category</h1>
					<nav aria-label="breadcrumb" className="banner-breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><Link to="/" >Home</Link></li>
              <li className="breadcrumb-item active" aria-current="page">Shop Category</li>
            </ol>
          </nav>
				</div>
			</div>
    </div>
	</section>
	{/* ================ end banner area ================= */}


	{/* ================ category section start ================= */}		  
  <section className="section-margin--small mb-5">
    <div className="container">
      <div className="row">
        <div className="col-xl-3 col-lg-4 col-md-5">
          <div className="sidebar-categories">
            <div className="head">Browse Categories</div>
            <ul className="main-categories">
              <li className="common-filter">
                <form action="#">
                  <ul>

                  {/* <li className="nav-item submenu dropdown">
                    <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"
                    aria-expanded="false">Mens Were</a>

                    <ul className="dropdown-menu">
                      {allCategory.length > 0 && allCategory.filter(list=>list.category.includes("men")).map(list=> 
                      <li className="filter-list">
                        <input className="pixel-radio" type="radio" id="men" name="brand" /><label for="men">{list.list}<span> (3600)</span></label>
                      </li>
                      )}
                     
                    </ul>

                  </li> */}


                    {allCategory.length > 0 && allCategory.map(list=>

                    <li className="filter-list" key={list._id}>
                      <input className="pixel-radio" type="radio" id="men" name="brand" /><label for="men">{list.category}<span> (3600)</span></label>
                    </li>
                      )}

                    {/* <li className="filter-list"><input className="pixel-radio" type="radio" id="men" name="brand" /><label for="men">Sarees<span> (3600)</span></label></li>
                    <li className="filter-list"><input className="pixel-radio" type="radio" id="women" name="brand" /><label for="women">Women<span> (3600)</span></label></li>
                    <li className="filter-list"><input className="pixel-radio" type="radio" id="accessories" name="brand" /><label for="accessories">Accessories<span> (3600)</span></label></li>
                    <li className="filter-list"><input className="pixel-radio" type="radio" id="Mens" name="brand" /><label for="Mens">Mens<span> (3600)</span></label></li>
                     <li className="filter-list"><input className="pixel-radio" type="radio" id="bayItem" name="brand" /><label for="bayItem">Bay item<span> (3600)</span></label></li>
                    <li className="filter-list"><input className="pixel-radio" type="radio" id="electronics" name="brand" /><label for="electronics">Electronics<span> (3600)</span></label></li>
                    <li className="filter-list"><input className="pixel-radio" type="radio" id="food" name="brand" /><label for="food">Food<span> (3600)</span></label></li> */}
                  </ul>
                </form>
              </li>
            </ul>
          </div>

          {/* <div className="sidebar-filter">
            <div className="top-filter-head">Product Filters</div>
            <div className="common-filter">
              <div className="head">Brands</div>
              <form action="#">
                <ul>
                  <li className="filter-list"><input className="pixel-radio" type="radio" id="apple" name="brand" /><label for="apple">Apple<span>(29)</span></label></li>
                  <li className="filter-list"><input className="pixel-radio" type="radio" id="asus" name="brand" /><label for="asus">Asus<span>(29)</span></label></li>
                  <li className="filter-list"><input className="pixel-radio" type="radio" id="gionee" name="brand" /><label for="gionee">Gionee<span>(19)</span></label></li>
                  <li className="filter-list"><input className="pixel-radio" type="radio" id="micromax" name="brand" /><label for="micromax">Micromax<span>(19)</span></label></li>
                  <li className="filter-list"><input className="pixel-radio" type="radio" id="samsung" name="brand" /><label for="samsung">Samsung<span>(19)</span></label></li>
                </ul>
              </form>
            </div>
            <div className="common-filter">
              <div className="head">Color</div>
              <form action="#">
                <ul>
                  <li className="filter-list"><input className="pixel-radio" type="radio" id="black" name="color" /><label for="black">Black<span>(29)</span></label></li>
                  <li className="filter-list"><input className="pixel-radio" type="radio" id="balckleather" name="color" /><label for="balckleather">Black
                      Leather<span>(29)</span></label></li>
                  <li className="filter-list"><input className="pixel-radio" type="radio" id="blackred" name="color" /><label for="blackred">Black
                      with red<span>(19)</span></label></li>
                  <li className="filter-list"><input className="pixel-radio" type="radio" id="gold" name="color" /><label for="gold">Gold<span>(19)</span></label></li>
                  <li className="filter-list"><input className="pixel-radio" type="radio" id="spacegrey" name="color" /><label for="spacegrey">Spacegrey<span>(19)</span></label></li>
                </ul>
              </form>
            </div>
            <div className="common-filter">
              <div className="head">Price</div>
              <div className="price-range-area">
                <div id="price-range"></div>
                <div className="value-wrapper d-flex">
                  <div className="price">Price:</div>
                  <span>$</span>
                  <div id="lower-value"></div>
                  <div className="to">to</div>
                  <span>$</span>
                  <div id="upper-value"></div>
                </div>
              </div>
            </div>
          </div> */}

        </div>

        <div className="col-xl-9 col-lg-8 col-md-7">
          {/* Start Filter Bar */}
          <div className="filter-bar d-flex flex-wrap align-items-center">
            {/* <div className="sorting">
              <select>
                <option value="1">Default sorting</option>
                <option value="1">Default sorting</option>
                <option value="1">Default sorting</option>
              </select>
            </div> */}

            {/* <div className="sorting mr-auto">
              <select>
                <option value="1">Show 12</option>
                <option value="1">Show 12</option>
                <option value="1">Show 12</option>
              </select>
            </div> */}

            <div>
              <div className="input-group filter-bar-search">
                <input type="text" placeholder="Search"/>
                <div className="input-group-append">
                  <button type="button"><i className="ti-search"></i></button>
                </div>
              </div>
            </div>
          </div>
          {/* End Filter Bar */}

          {/* Start Best Seller */}
          <section className="lattest-product-area pb-40 category-list">
            <div className="row">
              {allProducts.length > 0 ? allProducts.map(list=>
              <div className="col-md-6 col-lg-4" key={list._id}>
                <div className="card text-center card-product">
                  <div className="card-product__img">
                    <img className="card-img image_preview" src={`${server_access_point}/productImages/${list.productimg[0]}`} alt="" />
                    <ul className="card-product__imgOverlay">
                      <li><button  onClick={()=>viewSingleProduct(list)}><i className="ti-eye"></i></button></li>
                      <li><button><i className="ti-shopping-cart"></i></button></li>
                      <li><button><i className="ti-heart"></i></button></li>
                    </ul>
                  </div>
                  <div className="card-body">
                    <p>{list.productcategory}</p>
                    <h4 className="card-product__title"><a style={{cursor : "pointer"}} onClick={()=>viewSingleProduct(list)}>{list.productname}</a></h4>
                    <p className="card-product__price">&#x20B9; {list.productprice} /-</p>
                  </div>
                </div>
              </div>
              )
              :
              <div className="col-md-6 col-lg-4">no data...</div>
              }

{/* 
              <div className="col-md-6 col-lg-4">
                <div className="card text-center card-product">
                  <div className="card-product__img">
                    <img className="card-img" src="assets/img/product/product1.png" alt="" />
                    <ul className="card-product__imgOverlay">
                      <li><button><i className="ti-search"></i></button></li>
                      <li><button><i className="ti-shopping-cart"></i></button></li>
                      <li><button><i className="ti-heart"></i></button></li>
                    </ul>
                  </div>
                  <div className="card-body">
                    <p>Accessories</p>
                    <h4 className="card-product__title"><a href="#">Quartz Belt Watch</a></h4>
                    <p className="card-product__price">$150.00</p>
                  </div>
                </div>
              </div>

              <div className="col-md-6 col-lg-4">
                <div className="card text-center card-product">
                  <div className="card-product__img">
                    <img className="card-img" src="assets/img/product/product2.png" alt="" />
                    <ul className="card-product__imgOverlay">
                      <li><button><i className="ti-search"></i></button></li>
                      <li><button><i className="ti-shopping-cart"></i></button></li>
                      <li><button><i className="ti-heart"></i></button></li>
                    </ul>
                  </div>
                  <div className="card-body">
                    <p>Beauty</p>
                    <h4 className="card-product__title"><a href="#">Women Freshwash</a></h4>
                    <p className="card-product__price">$150.00</p>
                  </div>
                </div>
              </div>

              <div className="col-md-6 col-lg-4">
                <div className="card text-center card-product">
                  <div className="card-product__img">
                    <img className="card-img" src="assets/img/product/product3.png" alt="" />
                    <ul className="card-product__imgOverlay">
                      <li><button><i className="ti-search"></i></button></li>
                      <li><button><i className="ti-shopping-cart"></i></button></li>
                      <li><button><i className="ti-heart"></i></button></li>
                    </ul>
                  </div>
                  <div className="card-body">
                    <p>Decor</p>
                    <h4 className="card-product__title"><a href="#">Room Flash Light</a></h4>
                    <p className="card-product__price">$150.00</p>
                  </div>
                </div>
              </div>

              <div className="col-md-6 col-lg-4">
                <div className="card text-center card-product">
                  <div className="card-product__img">
                    <img className="card-img" src="assets/img/product/product4.png" alt="" />
                    <ul className="card-product__imgOverlay">
                      <li><button><i className="ti-search"></i></button></li>
                      <li><button><i className="ti-shopping-cart"></i></button></li>
                      <li><button><i className="ti-heart"></i></button></li>
                    </ul>
                  </div>
                  <div className="card-body">
                    <p>Decor</p>
                    <h4 className="card-product__title"><a href="#">Room Flash Light</a></h4>
                    <p className="card-product__price">$150.00</p>
                  </div>
                </div>
              </div>

              <div className="col-md-6 col-lg-4">
                <div className="card text-center card-product">
                  <div className="card-product__img">
                    <img className="card-img" src="assets/img/product/product5.png" alt="" />
                    <ul className="card-product__imgOverlay">
                      <li><button><i className="ti-search"></i></button></li>
                      <li><button><i className="ti-shopping-cart"></i></button></li>
                      <li><button><i className="ti-heart"></i></button></li>
                    </ul>
                  </div>
                  <div className="card-body">
                    <p>Accessories</p>
                    <h4 className="card-product__title"><a href="#">Man Office Bag</a></h4>
                    <p className="card-product__price">$150.00</p>
                  </div>
                </div>
              </div>

              <div className="col-md-6 col-lg-4">
                <div className="card text-center card-product">
                  <div className="card-product__img">
                    <img className="card-img" src="assets/img/product/product6.png" alt="" />
                    <ul className="card-product__imgOverlay">
                      <li><button><i className="ti-search"></i></button></li>
                      <li><button><i className="ti-shopping-cart"></i></button></li>
                      <li><button><i className="ti-heart"></i></button></li>
                    </ul>
                  </div>
                  <div className="card-body">
                    <p>Kids Toy</p>
                    <h4 className="card-product__title"><a href="#">Charging Car</a></h4>
                    <p className="card-product__price">$150.00</p>
                  </div>
                </div>
              </div>

              <div className="col-md-6 col-lg-4">
                <div className="card text-center card-product">
                  <div className="card-product__img">
                    <img className="card-img" src="assets/img/product/product7.png" alt="" />
                    <ul className="card-product__imgOverlay">
                      <li><button><i className="ti-search"></i></button></li>
                      <li><button><i className="ti-shopping-cart"></i></button></li>
                      <li><button><i className="ti-heart"></i></button></li>
                    </ul>
                  </div>
                  <div className="card-body">
                    <p>Accessories</p>
                    <h4 className="card-product__title"><a href="#">Blutooth Speaker</a></h4>
                    <p className="card-product__price">$150.00</p>
                  </div> 
                </div>
              </div>
              
              <div className="col-md-6 col-lg-4">
                <div className="card text-center card-product">
                  <div className="card-product__img">
                    <img className="card-img" src="assets/img/product/product8.png" alt="" />
                    <ul className="card-product__imgOverlay">
                      <li><button><i className="ti-search"></i></button></li>
                      <li><button><i className="ti-shopping-cart"></i></button></li>
                      <li><button><i className="ti-heart"></i></button></li>
                    </ul>
                  </div>
                  <div className="card-body">
                    <p>Kids Toy</p>
                    <h4 className="card-product__title"><a href="#">Charging Car</a></h4>
                    <p className="card-product__price">$150.00</p>
                  </div>
                </div>
              </div>

              <div className="col-md-6 col-lg-4">
                <div className="card text-center card-product">
                  <div className="card-product__img">
                    <img className="card-img" src="assets/img/product/product1.png" alt="" />
                    <ul className="card-product__imgOverlay">
                      <li><button><i className="ti-search"></i></button></li>
                      <li><button><i className="ti-shopping-cart"></i></button></li>
                      <li><button><i className="ti-heart"></i></button></li>
                    </ul>
                  </div>
                  <div className="card-body">
                    <p>Accessories</p>
                    <h4 className="card-product__title"><a href="#">Quartz Belt Watch</a></h4>
                    <p className="card-product__price">$150.00</p>
                  </div>
                </div>
              </div> */}

            </div>
          </section>
          {/* End Best Seller */}
        </div>
      </div>
    </div>
  </section>
	{/* ================ category section end ================= */}		  

	{/* ================ top product area start ================= */}	
	{/* <section className="related-product-area">
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
	{/* ================ top product area end ================= */}		

	{/* ================ Subscribe section start ================= */}		  
        <SubscribeSection />
	{/* ================ Subscribe section end ================= */}		  


  {/*================ Start footer Area  =================*/}	
	
        <Footer />
	{/*================ End footer Area  =================*/}



 
    </div>
  )
}

export default ShopCategory