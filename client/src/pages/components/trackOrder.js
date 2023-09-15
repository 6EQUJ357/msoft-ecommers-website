import React from 'react'
import Footer from './reUseModules/footer'
import Navbar from './reUseModules/navbar'
import { Link } from 'react-router-dom'

const TrackOrder = () => {
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
	<section className="blog-banner-area" id="category">
		<div className="container h-100">
			<div className="blog-banner">
				<div className="text-center">
					<h1>Order Tracking</h1>
					<nav aria-label="breadcrumb" className="banner-breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><Link to="/">Home</Link></li>
              <li className="breadcrumb-item active" aria-current="page">Order Tracking</li>
            </ol>
          </nav>
				</div>
			</div>
    </div>
	</section>
	{/* ================ end banner area ================= */}
  
  
  {/*================Tracking Box Area =================*/}
  <section className="tracking_box_area section-margin--small">
      <div className="container">
          <div className="tracking_box_inner">
              <p>To track your order please enter your Order ID in the box below and press the "Track" button. This
                  was given to you on your receipt and in the confirmation email you should have received.</p>
              <form className="row tracking_form" action="#" method="post" novalidate="novalidate">
                  <div className="col-md-12 form-group">
                      <input type="text" className="form-control" id="order" name="order" placeholder="Order ID" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Order ID'" />
                  </div>
                  <div className="col-md-12 form-group">
                      <input type="email" className="form-control" id="email" name="email" placeholder="Billing Email Address" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Billing Email Address'" />
                  </div>
                  <div className="col-md-12 form-group">
                      <button type="submit" value="submit" className="button button-tracking">Track Order</button>
                  </div>
              </form>
          </div>
      </div>
  </section>
  {/*================End Tracking Box Area =================*/}



  {/*================ Start footer Area  =================*/}	
 
    <Footer />
	{/*================ End footer Area  =================*/}


</div>

    )
}

export default TrackOrder