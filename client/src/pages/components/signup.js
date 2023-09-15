import React, { useState } from 'react'
import Navbar from './reUseModules/navbar'
import Footer from './reUseModules/footer'
import { Link, useNavigate } from 'react-router-dom'
import {useFormik} from "formik"
import * as Yup from "yup"
import axios from "axios"
import {server_access_point} from "./config"

import "../../App.css"



const Signup = () => {
	const navigate = useNavigate();

	const formik = useFormik({
		initialValues : {
			username: "",
			email : "",
			mobileNO : "",
			password:"",
			confirmpassword : ""
		},
		validationSchema:Yup.object().shape({

            username : Yup.string().required("Name is Required"),

            email : Yup.string().matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, 'Invalid email address').required("Email Required"),

            mobileNO : Yup.string().required('Phone number is required').matches(/^\d+$/, 'Phone number must only contain numbers').min(10, 'Phone number must be exactly 10 digits').max(10, 'Phone number must be exactly 10 digits'),

            password : Yup.string().min(6, 'Password must be at least six characters long.').max(16,'Maximum of sixteen character allowed!').required("Password Required"),

            confirmpassword : Yup.string().oneOf([Yup.ref('password'), null],"Passwords didn't match ! ").required("Password Required"),

            }),
		onSubmit:(values, {resetForm})=>{
			//console.log("form values", values);

			axios.post(`${server_access_point}/signup`, values).then(res=>{
				alert(res.data.message);

				if(res.data.status === 200 && res.data.response === true){
					navigate("/signin");
				}
			}
				).catch(err=>console.log("error occured while signup", err));
		}
	})

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


	const [pass2, setpass2] = useState("password");
	const [eye2, seteye2] = useState("fas fa-eye-slash")


	const handlevisibility2 = ()=>{
		if(pass2 ==="password"){
			setpass2("text");
			seteye2("fas fa-eye");
		}
		else{
			setpass2("password");
			seteye2("fas fa-eye-slash");
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
					<h1>Register</h1>
					<nav aria-label="breadcrumb" className="banner-breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><Link to="/">Home</Link></li>
              <li className="breadcrumb-item active" aria-current="page">Register</li>
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
							<h4>Already have an account?</h4>
							<p>There are advances being made in science and technology everyday, and a good example of this is the</p>
							<Link className="button button-account" to="/signin">Login Now</Link>
						</div>
					</div>
				</div>
				<div className="col-lg-6">
					<div className="login_form_inner register_form_inner">
						<h3>Create an account</h3>

						<form className="row login_form" onSubmit={formik.handleSubmit} id="register_form" >

							<div className="col-md-12 form-group">
								<input type="text" className="form-control" id="name" name="username" placeholder="Username" {...formik.getFieldProps("username")} />
							</div>

							{(formik.errors.username && formik.touched.username) && <small className='error_message'>{formik.errors.username}</small>}


							<div className="col-md-12 form-group">
								<input type="email" className="form-control" id="email" name="email" placeholder="Email Address" {...formik.getFieldProps("email")} />
              				</div>

							  {(formik.errors.email && formik.touched.email) && <small className='error_message'>{formik.errors.email}</small>}


							<div className="col-md-12 form-group">
								<input type="text" className="form-control" id="mobileNO" name="mobileNO" placeholder="Mobile Number" {...formik.getFieldProps("mobileNO")}/>
							</div>

							{(formik.errors.mobileNO && formik.touched.mobileNO) && <small className='error_message'>{formik.errors.mobileNO}</small>}


              				<div className="col-md-12 form-group password_container">
								<input type={pass1} className="form-control" id="password" name="password" placeholder="Password" {...formik.getFieldProps("password")} />
								<i className={`${eye1} password_eye`} onClick={handlevisibility1}></i>
							</div>

							{(formik.errors.password && formik.touched.password) && <small className='error_message'>{formik.errors.password}</small>}



							<div className="col-md-12 form-group password_container">
								<input type={pass2} className="form-control" id="confirmPassword" name="confirmpassword" placeholder="Confirm Password" {...formik.getFieldProps("confirmpassword")} />
								<i className={`${eye2} password_eye`} onClick={handlevisibility2}></i>
							</div>

							{(formik.errors.confirmpassword && formik.touched.confirmpassword) && <small className='error_message'>{formik.errors.confirmpassword}</small>}


							{/* <div className="col-md-12 form-group">
								<div className="creat_account">
									<input type="checkbox" id="f-option2" name="selector" />
									<label for="f-option2">Keep me logged in</label>
								</div>
							</div> */}
							<div className="col-md-12 form-group">
								<button type="submit" value="submit" className="button button-register w-100">Register</button>
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

export default Signup