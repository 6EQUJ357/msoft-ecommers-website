import React from 'react'
import Navbar from './reUseModules/navbar'
import Footer from './reUseModules/footer'
import SubscribeSection from './reUseModules/subscribeSection'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    
    <div>
  {/*================ Start Header Menu Area =================*/}
	<header className="header_area">
    <div className="main_menu">

        {/* navbar start */}
            <Navbar/>
        {/* navbar end */}
      
    </div>
  </header>
	{/*================ End Header Menu Area =================*/}

  <main className="site-main">
    
    {/*================ Hero banner start =================*/}
    <section className="hero-banner">
      <div className="container">
        <div className="row no-gutters align-items-center pt-60px">
          <div className="col-5 d-none d-sm-block">
            <div className="hero-banner__img">
              <img className="img-fluid" src="assets/img/home/hero-banner.png" alt="" />
            </div>
          </div>
          <div className="col-sm-7 col-lg-6 offset-lg-1 pl-4 pl-md-5 pl-lg-0">
            <div className="hero-banner__content">
              <h4>Shop is fun</h4>
              <h1>Browse Our Premium Product</h1>
              <p>Experience a world of elegance and fashion with our branded products, including exquisite sarees, sophisticated menswear, and trendy womenswear, along with a range of must-have accessories to complete your look. Explore our collection and stay ahead in style.</p>
              <Link to = "/shopcategory" className="button button-hero" >Browse Now</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/*================ Hero banner start =================*/}

    {/*================ Hero Carousel start =================*/}
    <section className="section-margin mt-0">
      <div className="owl-carousel owl-theme hero-carousel">
        <div className="hero-carousel__slide">
          <img src="assets/assets/img/home/hero-slide1.png" alt="" className="img-fluid" />
          <a href="#" className="hero-carousel__slideOverlay">
            <h3>Wireless Headphone</h3>
            <p>Accessories Item</p>
          </a>
        </div>
        <div className="hero-carousel__slide">
          <img src="assets/assets/img/home/hero-slide2.png" alt="" className="img-fluid" />
          <a href="#" className="hero-carousel__slideOverlay">
            <h3>Wireless Headphone</h3>
            <p>Accessories Item</p>
          </a>
        </div>
        <div className="hero-carousel__slide">
          <img src="assets/assets/img/home/hero-slide3.png" alt="" className="img-fluid" />
          <a href="#" className="hero-carousel__slideOverlay">
            <h3>Wireless Headphone</h3>
            <p>Accessories Item</p>
          </a>
        </div>
      </div>
    </section>
    {/*================ Hero Carousel end =================*/}

    {/* ================ trending product section start ================= */}  
    <section className="section-margin calc-60px">
      <div className="container">
        <div className="section-intro pb-60px">
          <p>Popular Item in the market</p>
          <h2>Trending <span className="section-intro__style">Product</span></h2>
        </div>
        <div className="row">
          <div className="col-md-6 col-lg-4 col-xl-3">
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
                <h4 className="card-product__title"><a href="single-product.html">Quartz Belt Watch</a></h4>
                <p className="card-product__price">$150.00</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 col-xl-3">
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
                <h4 className="card-product__title"><a href="single-product.html">Women Freshwash</a></h4>
                <p className="card-product__price">$150.00</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 col-xl-3">
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
                <h4 className="card-product__title"><a href="single-product.html">Room Flash Light</a></h4>
                <p className="card-product__price">$150.00</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 col-xl-3">
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
                <h4 className="card-product__title"><a href="single-product.html">Room Flash Light</a></h4>
                <p className="card-product__price">$150.00</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 col-xl-3">
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
                <h4 className="card-product__title"><a href="single-product.html">Man Office Bag</a></h4>
                <p className="card-product__price">$150.00</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 col-xl-3">
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
                <h4 className="card-product__title"><a href="single-product.html">Charging Car</a></h4>
                <p className="card-product__price">$150.00</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 col-xl-3">
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
                <h4 className="card-product__title"><a href="single-product.html">Blutooth Speaker</a></h4>
                <p className="card-product__price">$150.00</p>
              </div> 
            </div>
          </div>
          <div className="col-md-6 col-lg-4 col-xl-3">
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
        </div>
      </div>
    </section>
    {/* ================ trending product section end ================= */}  


    {/* ================ offer section start ================= */} 
    <section className="offer" id="parallax-1" data-anchor-target="#parallax-1" data-300-top="background-position: 20px 30px" data-top-bottom="background-position: 0 20px">
      <div className="container">
        <div className="row">
          <div className="col-xl-5">
            <div className="offer__content text-center">
              <h3>Up To 50% Off</h3>
              <h4>Winter Sale</h4>
              <p>Him she'd let them sixth saw light</p>
              <Link className="button button--active mt-3 mt-xl-4" to="/shopcategory">Shop Now</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* ================ offer section end ================= */} 

    {/* ================ Best Selling item  carousel ================= */} 
    <section className="section-margin calc-60px">
      <div className="container">
        <div className="section-intro pb-60px">
          <p>Popular Item in the market</p>
          <h2>Best <span className="section-intro__style">Sellers</span></h2>
        </div>
        <div className="owl-carousel owl-theme" id="bestSellerCarousel">
          <div className="card text-center card-product">
            <div className="card-product__img">
              <img className="img-fluid" src="assets/img/product/product1.png" alt="" />
              <ul className="card-product__imgOverlay">
                <li><button><i className="ti-search"></i></button></li>
                <li><button><i className="ti-shopping-cart"></i></button></li>
                <li><button><i className="ti-heart"></i></button></li>
              </ul>
            </div>
            <div className="card-body">
              <p>Accessories</p>
              <h4 className="card-product__title"><a href="single-product.html">Quartz Belt Watch</a></h4>
              <p className="card-product__price">$150.00</p>
            </div>
          </div>

          <div className="card text-center card-product">
            <div className="card-product__img">
              <img className="img-fluid" src="assets/img/product/product2.png" alt="" />
              <ul className="card-product__imgOverlay">
                <li><button><i className="ti-search"></i></button></li>
                <li><button><i className="ti-shopping-cart"></i></button></li>
                <li><button><i className="ti-heart"></i></button></li>
              </ul>
            </div>
            <div className="card-body">
              <p>Beauty</p>
              <h4 className="card-product__title"><a href="single-product.html">Women Freshwash</a></h4>
              <p className="card-product__price">$150.00</p>
            </div>
          </div>

          <div className="card text-center card-product">
            <div className="card-product__img">
              <img className="img-fluid" src="assets/img/product/product3.png" alt="" />
              <ul className="card-product__imgOverlay">
                <li><button><i className="ti-search"></i></button></li>
                <li><button><i className="ti-shopping-cart"></i></button></li>
                <li><button><i className="ti-heart"></i></button></li>
              </ul>
            </div>
            <div className="card-body">
              <p>Decor</p>
              <h4 className="card-product__title"><a href="single-product.html">Room Flash Light</a></h4>
              <p className="card-product__price">$150.00</p>
            </div>
          </div>

          <div className="card text-center card-product">
            <div className="card-product__img">
              <img className="img-fluid" src="assets/img/product/product4.png" alt="" />
              <ul className="card-product__imgOverlay">
                <li><button><i className="ti-search"></i></button></li>
                <li><button><i className="ti-shopping-cart"></i></button></li>
                <li><button><i className="ti-heart"></i></button></li>
              </ul>
            </div>
            <div className="card-body">
              <p>Decor</p>
              <h4 className="card-product__title"><a href="single-product.html">Room Flash Light</a></h4>
              <p className="card-product__price">$150.00</p>
            </div>
          </div>

          <div className="card text-center card-product">
            <div className="card-product__img">
              <img className="img-fluid" src="assets/img/product/product1.png" alt="" />
              <ul className="card-product__imgOverlay">
                <li><button><i className="ti-search"></i></button></li>
                <li><button><i className="ti-shopping-cart"></i></button></li>
                <li><button><i className="ti-heart"></i></button></li>
              </ul>
            </div>
            <div className="card-body">
              <p>Accessories</p>
              <h4 className="card-product__title"><a href="single-product.html">Quartz Belt Watch</a></h4>
              <p className="card-product__price">$150.00</p>
            </div>
          </div>

          <div className="card text-center card-product">
            <div className="card-product__img">
              <img className="img-fluid" src="assets/img/product/product2.png" alt="" />
              <ul className="card-product__imgOverlay">
                <li><button><i className="ti-search"></i></button></li>
                <li><button><i className="ti-shopping-cart"></i></button></li>
                <li><button><i className="ti-heart"></i></button></li>
              </ul>
            </div>
            <div className="card-body">
              <p>Beauty</p>
              <h4 className="card-product__title"><a href="single-product.html">Women Freshwash</a></h4>
              <p className="card-product__price">$150.00</p>
            </div>
          </div>

          <div className="card text-center card-product">
            <div className="card-product__img">
              <img className="img-fluid" src="assets/img/product/product3.png" alt="" />
              <ul className="card-product__imgOverlay">
                <li><button><i className="ti-search"></i></button></li>
                <li><button><i className="ti-shopping-cart"></i></button></li>
                <li><button><i className="ti-heart"></i></button></li>
              </ul>
            </div>
            <div className="card-body">
              <p>Decor</p>
              <h4 className="card-product__title"><a href="single-product.html">Room Flash Light</a></h4>
              <p className="card-product__price">$150.00</p>
            </div>
          </div>

          <div className="card text-center card-product">
            <div className="card-product__img">
              <img className="img-fluid" src="assets/img/product/product4.png" alt="" />
              <ul className="card-product__imgOverlay">
                <li><button><i className="ti-search"></i></button></li>
                <li><button><i className="ti-shopping-cart"></i></button></li>
                <li><button><i className="ti-heart"></i></button></li>
              </ul>
            </div>
            <div className="card-body">
              <p>Decor</p>
              <h4 className="card-product__title"><a href="single-product.html">Room Flash Light</a></h4>
              <p className="card-product__price">$150.00</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* ================ Best Selling item  carousel end ================= */} 

    {/* ================ Blog section start ================= */}  
    <section className="blog">
      <div className="container">
        <div className="section-intro pb-60px">
          <p>Popular Item in the market</p>
          <h2>Latest <span className="section-intro__style">News</span></h2>
        </div>

        <div className="row">
          <div className="col-md-6 col-lg-4 mb-4 mb-lg-0">
            <div className="card card-blog">
              <div className="card-blog__img">
                <img className="card-img rounded-0" src="assets/img/blog/blog1.png" alt="" />
              </div>
              <div className="card-body">
                <ul className="card-blog__info">
                  <li><a href="#">By Admin</a></li>
                  <li><a href="#"><i className="ti-comments-smiley"></i> 2 Comments</a></li>
                </ul>
                <h4 className="card-blog__title"><a href="single-blog.html">The Richland Center Shooping News and weekly shooper</a></h4>
                <p>Let one fifth i bring fly to divided face for bearing divide unto seed. Winged divided light Forth.</p>
                <a className="card-blog__link" href="#">Read More <i className="ti-arrow-right"></i></a>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-4 mb-4 mb-lg-0">
            <div className="card card-blog">
              <div className="card-blog__img">
                <img className="card-img rounded-0" src="assets/img/blog/blog2.png" alt="" />
              </div>
              <div className="card-body">
                <ul className="card-blog__info">
                  <li><a href="#">By Admin</a></li>
                  <li><a href="#"><i className="ti-comments-smiley"></i> 2 Comments</a></li>
                </ul>
                <h4 className="card-blog__title"><a href="single-blog.html">The Shopping News also offers top-quality printing services</a></h4>
                <p>Let one fifth i bring fly to divided face for bearing divide unto seed. Winged divided light Forth.</p>
                <a className="card-blog__link" href="#">Read More <i className="ti-arrow-right"></i></a>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-4 mb-4 mb-lg-0">
            <div className="card card-blog">
              <div className="card-blog__img">
                <img className="card-img rounded-0" src="assets/img/blog/blog3.png" alt="" />
              </div>
              <div className="card-body">
                <ul className="card-blog__info">
                  <li><a href="#">By Admin</a></li>
                  <li><a href="#"><i className="ti-comments-smiley"></i> 2 Comments</a></li>
                </ul>
                <h4 className="card-blog__title"><a href="single-blog.html">Professional design staff and efficient equipment you’ll find we offer</a></h4>
                <p>Let one fifth i bring fly to divided face for bearing divide unto seed. Winged divided light Forth.</p>
                <a className="card-blog__link" href="#">Read More <i className="ti-arrow-right"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* ================ Blog section end ================= */}  

    {/* ================ Subscribe section start ================= */} 
      <SubscribeSection />
    {/* ================ Subscribe section end ================= */} 

    

  </main>

 
  {/*================ Start footer Area  =================*/}	
        <Footer />
	{/*================ End footer Area  =================*/}

</div>
  )
}

export default Home