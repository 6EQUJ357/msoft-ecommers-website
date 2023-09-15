import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"


import Home from './pages/components/home'
import ShopCategory from './pages/components/shopCategory'
import ProductDetails from './pages/components/productDetails'
import ProductCheckouts from './pages/components/productCheckouts'
import OrderComformation from './pages/components/orderComformation'
import Cart from './pages/components/cart'
import Contact from './pages/components/contact'
import Signin from './pages/components/signin'
import Signup from './pages/components/signup'
import TrackOrder from './pages/components/trackOrder'
import Dashboard from './pages/components/dashboard'
import EditUser from './pages/components/editUser'
import EditProduct from './pages/components/editProduct'



const App = () => {


  return (
    
   
      <BrowserRouter>
        <Routes>
          <Route path='/signin' element = {<Signin />}/>
          <Route path='/signup' element = {<Signup />}/>


          <Route path="/" element={<Home />} />
          <Route path='/shopcategory' element = {<ShopCategory />}/>
          <Route path='/productdetails' element = {<ProductDetails/>}/>
          <Route path='/productcheckout' element = {<ProductCheckouts />}/>
          <Route path='/orderconformation' element = {<OrderComformation />}/>
          <Route path='/cart' element = {<Cart />}/>
          <Route path='/contact' element = {<Contact />}/>
          <Route path='/ordertracking' element = {<TrackOrder />}/>


          {/* dashboard */}
          <Route path='/dashboard' element={<Dashboard />}/>
          <Route path='/edituser' element = {<EditUser />}/>
          <Route path='/editproduct' element = {<EditProduct />}/>
        </Routes>
      </BrowserRouter>
   
  )
}

export default App