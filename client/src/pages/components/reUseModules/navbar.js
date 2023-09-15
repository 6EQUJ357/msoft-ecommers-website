import React, {useState, useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';

import { server_access_point } from '../config';

const Navbar = (params) => {

  const [cartProduct, setCartProduct] = useState([]);
  let navigate = useNavigate();

  const logouthandle = ()=>{
    let userResponse = window.confirm("you want to logged out...")
    if(userResponse){
        localStorage.clear();
        navigate("/signin"); 
    } 
}

//get all products from cart
useEffect(()=>{
  axios.get(`${server_access_point}/getcartproducts`).then(res=>{

      setCartProduct(res.data.cartProductData);


  }).catch(err=>console.log(err, "error while fetching cart product data"))
},[])


  return (
    <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container">
          <Link to="/" className="navbar-brand logo_h"><img src="assets/img/logo.png" alt="" /></Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <div className="collapse navbar-collapse offset" id="navbarSupportedContent">
            <ul className="nav navbar-nav menu_nav ml-auto mr-auto">
              <li className="nav-item active"><Link className="nav-link" to="/">Home</Link></li>
              <li className="nav-item submenu dropdown">
                <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"
                  aria-expanded="false">Shop</a>
                <ul className="dropdown-menu">
                  <li className="nav-item"><Link to="/shopcategory" className="nav-link" >Shop Category</Link></li>
                  {/* <li className="nav-item"><Link to="/productdetails" className="nav-link" >Product Details</Link></li> */}
                  <li className="nav-item"><Link to="/productcheckout" className="nav-link" >Product Checkout</Link></li>
                  <li className="nav-item"><Link to="/orderconformation" className="nav-link" >Confirmation</Link></li>
                  <li className="nav-item"><Link to="/cart" className="nav-link" >Shopping Cart</Link></li>
                  <li className="nav-item"><Link to="/ordertracking" className="nav-link" href="tracking-order.html">Tracking</Link></li>

                </ul>
							</li>
              {/* <li className="nav-item submenu dropdown">
                <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"
                  aria-expanded="false">Blog</a>
                <ul className="dropdown-menu">
                  <li className="nav-item"><a className="nav-link" href="blog.html">Blog</a></li>
                  <li className="nav-item"><a className="nav-link" href="single-blog.html">Blog Details</a></li>
                </ul>
				</li> */}
							{/* <li className="nav-item submenu dropdown">
                <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"
                  aria-expanded="false">Pages</a>
                <ul className="dropdown-menu">
                  <li className="nav-item"><Link to="/signin" className="nav-link" href="login.html">Login</Link></li>
                  <li className="nav-item"><Link to="/signUp" className="nav-link" href="register.html">Register</Link></li>
                  <li className="nav-item"><Link to="/ordertracking" className="nav-link" href="tracking-order.html">Tracking</Link></li>
                </ul>
              </li> */}

              <li className="nav-item"><Link to="/contact" className="nav-link" >Contact</Link></li>
            </ul>

            <ul className="nav-shop">
              {/* <li className="nav-item"><button><i className="ti-search"></i></button></li> */}
              
              <li className="nav-item submenu dropdown">
                <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"
                  aria-expanded="false"><i class="fas fa-user"></i></a>

                  {localStorage.getItem("webtoken") ? 

                    <ul className="dropdown-menu">
                      <li className="nav-item"><Link onClick={logouthandle} className="nav-link" >Logout</Link></li>
                      <li className="nav-item" style={{marginLeft:"-5px"}}><Link to="/dashboard" className="nav-link" >Dashboard</Link></li>
                    </ul>

                    :

                    <ul className="dropdown-menu">
                      <li className="nav-item"><Link to="/signin" className="nav-link" >Login</Link></li>
                      <li className="nav-item" style={{marginLeft:"-5px"}}><Link to="/signUp" className="nav-link" >Register</Link></li>
                      {/* <li className="nav-item" style={{border:"2px solid red", marginLeft:"-5px"}}><Link to="/ordertracking" className="nav-link" >Tracking</Link></li> */}
                    </ul>                   
                   
                  }
              </li>
              
              <li className="nav-item"><button><Link to="/cart"><i className="ti-shopping-cart"></i><span className="nav-shop__circle">{cartProduct ? cartProduct.length : 0}</span></Link></button> </li>
              {/* <li className="nav-item"><a className="button button-header" href="#">Buy Now</a></li> */}
            </ul>
          </div>
        </div>
    </nav>
  )
}

export default Navbar