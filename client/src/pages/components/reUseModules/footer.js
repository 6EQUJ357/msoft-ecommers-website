import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    
    <footer className="footer">
		<div className="footer-area">
			<div className="container">
				<div className="row section_gap">
					<div className="col-lg-3 col-md-6 col-sm-6">
						<div className="single-footer-widget tp_widgets">
							<h4 className="footer_title large_title">Our Mission</h4>
							<p>
							Our mission is to redefine fashion by showcasing the finest sarees, menswear, womenswear, and accessories, allowing individuals to express their unique style with confidence and elegance.
							</p>
							<p>
							We are dedicated to curating collections that resonate with every fashion enthusiast, helping them embrace their personal style and feel exceptional every day.
							</p>
						</div>
					</div>
					<div className="offset-lg-1 col-lg-2 col-md-6 col-sm-6">
						<div className="single-footer-widget tp_widgets">
							<h4 className="footer_title">Quick Links</h4>
							<ul className="list">
								<li><Link to="/">Home</Link></li>
								<li><Link to="/shopcategory">Shop Category</Link></li>
								<li><Link to="/productdetails">Product Details</Link></li>
								<li><Link to="/cart">Shopping Cart</Link></li>
								<li><Link to="/contact">Contact</Link></li>
							</ul>
						</div>
					</div>
					<div className="col-lg-2 col-md-6 col-sm-6">
						<div className="single-footer-widget instafeed">
							<h4 className="footer_title">Gallery</h4>
							<ul className="list instafeed d-flex flex-wrap">
								<li><img src="assets/img/gallery/r1.jpg" alt="" /></li>
								<li><img src="assets/img/gallery/r2.jpg" alt="" /></li>
								<li><img src="assets/img/gallery/r3.jpg" alt="" /></li>
								<li><img src="assets/img/gallery/r5.jpg" alt="" /></li>
								<li><img src="assets/img/gallery/r7.jpg" alt="" /></li>
								<li><img src="assets/img/gallery/r8.jpg" alt="" /></li>
							</ul>
						</div>
					</div>
					<div className="offset-lg-1 col-lg-3 col-md-6 col-sm-6">
						<div className="single-footer-widget tp_widgets">
							<h4 className="footer_title">Contact Us</h4>
							<div className="ml-40">
								<p className="sm-head">
									<span className="fa fa-location-arrow"></span>
									Head Office
								</p>
								<p>806, Manjeera Majestic Commercial</p>
	
								<p className="sm-head">
									<span className="fa fa-phone"></span>
									Phone Number
								</p>
								<p>
									+91 9618 624 866 <br />
									{/* +123 456 7890 */}
								</p>
	
								<p className="sm-head"> 
									<span className="fa fa-envelope"></span>
									Email
								</p>
								<p>
									info@msoftwebtechnologies.com <br />
									{/* www.infoexample.com */}
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div className="footer-bottom">
			<div className="container">
				<div className="row d-flex">
					<p className="col-lg-12 footer-text text-center">
						{/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
Copyright &copy; All rights reserved | Design & Developed <i className="fa fa-heart" aria-hidden="true"></i> by <a href="https://msoftwebtechnologies.com" target="_blank">Msoft</a>
{/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}</p>
				</div>
			</div>
		</div>
	</footer>
  )
}

export default Footer