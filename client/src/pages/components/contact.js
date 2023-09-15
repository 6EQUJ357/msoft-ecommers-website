import React from 'react'
import Navbar from './reUseModules/navbar'
import Footer from './reUseModules/footer'
import { Link } from 'react-router-dom'

const Contact = () => {
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
	<section className="blog-banner-area" id="contact">
		<div className="container h-100">
			<div className="blog-banner">
				<div className="text-center">
					<h1>Contact Us</h1>
					<nav aria-label="breadcrumb" className="banner-breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><Link to="/">Home</Link></li>
              <li className="breadcrumb-item active" aria-current="page">Contact Us</li>
            </ol>
          </nav>
				</div>
			</div>
    </div>
	</section>
	{/* ================ end banner area ================= */}

	{/* ================ contact section start ================= */}
  <section className="section-margin--small">
    <div className="container">

        
      <div className="d-none d-sm-block mb-5 pb-4">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.3282138783193!2d78.39101607544582!3d17491838983413317!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f131!3m3!1m2!1s0x3bcb9193841f4d1b%3A0x43d5c3fbdb546033!2sMSOFT%20webtechnologies!5e0!3m2!1sen!2sin!4v1686831612217!5m2!1sen!2sin" width="600" height="450" style={{border:"0", width:"100%"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title=' view map'></iframe>  
      </div>


      <div className="row">
        <div className="col-md-4 col-lg-3 mb-4 mb-md-0">
          <div className="media contact-info">
            <span className="contact-info__icon"><i className="ti-home"></i></span>
            <div className="media-body">
              <h3>KPHB, Hyderabad</h3>
              <p>806, Manjeera Majestic Commercial</p>
            </div>
          </div>
          <div className="media contact-info">
            <span className="contact-info__icon"><i className="ti-headphone"></i></span>
            <div className="media-body">
              <h3><a href="tel:+91 9618 624 866">+91 9618 624 866</a></h3>
              <p>Mon to Fri 9am to 6pm</p>
            </div>
          </div>
          <div className="media contact-info">
            <span className="contact-info__icon"><i className="ti-email"></i></span>
            <div className="media-body">
              <h3><a href="mailto:info@msoftwebtechnologies.com">info@msoftwebtechnologies.com</a></h3>
              <p>Send us your query anytime!</p>
            </div>
          </div>
        </div>
        <div className="col-md-8 col-lg-9">
          <form className="form-contact contact_form" action="contact_process.php" method="post" id="contactForm" novalidate="novalidate">
            <div className="row">
              <div className="col-lg-5">
                <div className="form-group">
                  <input className="form-control" name="name" id="name" type="text" placeholder="Enter your name" />
                </div>
                <div className="form-group">
                  <input className="form-control" name="email" id="email" type="email" placeholder="Enter email address" />
                </div>
                <div className="form-group">
                  <input className="form-control" name="subject" id="subject" type="text" placeholder="Enter Subject" />
                </div>
              </div>
              <div className="col-lg-7">
                <div className="form-group">
                    <textarea className="form-control different-control w-100" name="message" id="message" cols="30" rows="5" placeholder="Enter Message"></textarea>
                </div>
              </div>
            </div>
            <div className="form-group text-center text-md-right mt-3">
              <button type="submit" className="button button--active button-contactForm">Send Message</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
	{/* ================ contact section end ================= */}
  
  

  {/*================ Start footer Area  =================*/}	
    <Footer />
	{/*================ End footer Area  =================*/}



  
</div>
  )
}

export default Contact