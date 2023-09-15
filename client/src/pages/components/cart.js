import React, {useEffect, useState} from 'react'
import Footer from './reUseModules/footer'
import Navbar from './reUseModules/navbar'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

import { server_access_point } from './config'


const Cart = () => {

    const navigate = useNavigate();

    const [cartProduct, setCartProduct] = useState([]);
    console.log("cart products", cartProduct);


    useEffect(()=>{
        axios.get(`${server_access_point}/getcartproducts`).then(res=>{

            setCartProduct(res.data.cartProductData);


        }).catch(err=>console.log(err, "error while fetching cart product data"))
    },[])


    //handle MoveToCheckOut

    const handleMoveToCheckOut = ()=>{
        navigate("/productcheckout", {state : cartProduct})
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
	<section className="blog-banner-area" id="category">
		<div className="container h-100">
			<div className="blog-banner">
				<div className="text-center">
					<h1>Shopping Cart</h1>
					<nav aria-label="breadcrumb" className="banner-breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><Link to="/">Home</Link></li>
              <li className="breadcrumb-item active" aria-current="page">Shopping Cart</li>
            </ol>
          </nav>
				</div>
			</div>
    </div>
	</section>
	{/* ================ end banner area ================= */}
  
  

  {/*================Cart Area =================*/}
  <section className="cart_area">
      <div className="container">
          <div className="cart_inner">
              <div className="table-responsive">

               
                  <table className="table">

                      <thead>
                          <tr>
                              <th scope="col">Product Name</th>
                              <th scope="col">Category</th>
                              <th scope="col">Price</th>
                              <th scope="col">Quantity</th>
                              <th scope="col">Total</th>
                          </tr>
                      </thead>

                      
                      <tbody >

                      {cartProduct.length > 0 && cartProduct.map(list=>
                          <tr key={list._id}>

                              <td>
                                  <div className="media">
                                      <div className="d-flex">
                                          <img className='image_preview1' src={`${server_access_point}/productImages/${list.productimg[0]}`} alt="" />
                                      </div>
                                      <div className="media-body">
                                          <p>{list.productname}</p>
                                      </div>
                                  </div>
                              </td>

                              <td>
                                  <h5>{list.productcategory}</h5>
                              </td>

                              <td>
                                  <h5>&#x20B9; {list.productprice} /-</h5>
                              </td>
                              
                              <td>
                                  <div className="product_count">

                                  <td>
                                    <h5>{list.enterquantity}</h5>
                                  </td>

                                      {/* <input type="text" name="qty" id="sst" maxlength="12" value="1" title="Quantity:"
                                          className="input-text qty" /> */}

                                      {/* <button onclick="var result = document.getElementById('sst'); var sst = result.value; if( !isNaN( sst )) result.value++;return false;"
                                          className="increase items-count" type="button"><i className="lnr lnr-chevron-up"></i></button>
                                      <button onclick="var result = document.getElementById('sst'); var sst = result.value; if( !isNaN( sst ) &amp;&amp; sst > 0 ) result.value--;return false;"
                                          className="reduced items-count" type="button"><i className="lnr lnr-chevron-down"></i></button> */}
                                  </div>
                              </td>
                              <td>
                                  <h5>&#x20B9; {list.totalamount} /-</h5>
                              </td>
                          </tr>

                        )
                        }

                          
                        {cartProduct.length > 0 ? 
                        <>
                            <tr>
                              <td></td>
                              <td></td>
                              <td></td>

                              <td>
                                  <h5>Subtotal</h5>
                              </td>
                              <td>
                                  <h5>&#x20B9; {(cartProduct.map(list=> list.totalamount)).reduce((a,b)=>(Number(a) + Number(b)).toFixed(2))} /-</h5>
                              </td>
                          </tr>


                          <tr className="out_button_area">
                              <td className="d-none-l">

                              </td>
                              <td className="">

                              </td>
                              <td>
                         
                              </td>

                              <td>
                                  <div className="checkout_btn_inner d-flex align-items-center">
                                      <Link className="gray_btn" to="/shopcategory">Continue Shopping</Link>
                                      <a style={{cursor : "pointer"}} className="primary-btn ml-2" onClick={handleMoveToCheckOut} >Proceed to checkout</a>
                                  </div>
                              </td>

                              <td></td>

                          </tr>
                        </>
                        :
                       
                            <p style={{textAlign:"end"}}>no data...</p>
                       
                        }
                          

                      </tbody>
                       
                  </table>
                 
              </div>
          </div>
      </div>
  </section>
  {/*================End Cart Area =================*/}



  {/*================ Start footer Area  =================*/}	
      <Footer />
	{/*================ End footer Area  =================*/}


</div>
  )
}

export default Cart