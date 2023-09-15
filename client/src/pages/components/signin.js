import React, {useState} from 'react'
import Footer from './reUseModules/footer'
import Navbar from './reUseModules/navbar'
import { Link, useNavigate, Navigate } from 'react-router-dom'
import {useFormik} from "formik"
import * as Yup from "yup"
import axios from "axios"
import { server_access_point } from './config'

import "../../App.css"
 
const Signin = () => {
	const navigate = useNavigate();

	const formik = useFormik({
		initialValues : {
			email : "",
			password:""
		},
		validationSchema:Yup.object().shape({

            email : Yup.string().matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, 'Invalid email address').required("Email Required"),

            password : Yup.string().min(6, 'Password must be at least six characters long.').max(16,'Maximum of sixteen character allowed!').required("Password Required"),
            }),
		onSubmit:(values, {resetForm})=>{
			//console.log("form values", values);

			axios.post(`${server_access_point}/signin`, values).then(res=>{
				if(res.data.status === 400){
					alert(res.data.message);
					}

					if(res.data.status === 200){
            
						localStorage.setItem("webtoken", res.data.token);
						 //resetForm({values : ""});
			
						//navigate to user page
						
						navigate("/dashboard");		
			
						}
			}
				).catch(err=>console.log("error occured while signin", err));

		}
	})


	if(localStorage.getItem("webtoken")){
        return <Navigate to ="/dashboard"/>
    }



	const [pass1, setpass1] = useState("password"); 
	const [eye1, seteye1] = useState("fas fa-eye-slash")


	const handlevisibility1 = ()=>{
		if(pass1 ==="password"){
			setpass1("text");
			seteye1("fas fa-eye");
		}
		else{
			setpass1("password");
			seteye1("fas fa-eye-slash");
		}
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
					<h1>Login</h1>
					<nav aria-label="breadcrumb" className="banner-breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><Link to="/">Home</Link></li>
              <li className="breadcrumb-item active" aria-current="page">Login</li>
            </ol>
          </nav>
				</div>
			</div>
    </div>
	</section>
	{/* ================ end banner area ================= */}
  
  {/*================Login Box Area =================*/}
	<section className="login_box_area section-margin">
		<div className="container">
			<div className="row">
				<div className="col-lg-6">
					<div className="login_box_img">
						<div className="hover">
							<h4>New to our website?</h4>
							<p>There are advances being made in science and technology everyday, and a good example of this is the</p>
							<Link to="/signup" className="button button-account">Create an Account</Link>
						</div>
					</div>
				</div>
				<div className="col-lg-6">
					<div className="login_form_inner">
						<h3>Log in to enter</h3>


						<form className="row login_form" onSubmit={formik.handleSubmit}  >   	{/* id="contactForm" */}

							<div className="col-md-12 form-group">
								<input type="email" className="form-control" id="email" name="email" placeholder="Email Address" {...formik.getFieldProps("email")} />
              				</div>
 
							  {(formik.errors.email && formik.touched.email) && <small className='error_message'>{formik.errors.email}</small>}


							  <div className="col-md-12 form-group password_container">
								<input type={pass1} className="form-control" id="password" name="password" placeholder="Password" {...formik.getFieldProps("password")} />
								<i className={`${eye1} password_eye`} onClick={handlevisibility1}></i>

							</div>

							{(formik.errors.password && formik.touched.password) && <small className='error_message'>{formik.errors.password}</small>}


			
							{/* <div className="col-md-12 form-group">
								<div className="creat_account">
									<input type="checkbox" id="f-option2" name="selector" />
									<label for="f-option2">Keep me logged in</label>
								</div>
							</div> */}

							<div className="col-md-12 form-group">
								<button type="submit" value="submit" className="button button-login w-100">Log In</button>
								<a href="#">Forgot Password?</a>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	</section>
	{/*================End Login Box Area =================*/}



  {/*================ Start footer Area  =================*/}	
	
     <Footer />
	{/*================ End footer Area  =================*/}


</div>
  )
}

export default Signin