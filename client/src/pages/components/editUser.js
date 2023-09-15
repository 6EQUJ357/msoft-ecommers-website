import React, {useEffect} from 'react'
import { useFormik } from 'formik'
import * as Yup from "yup"
import axios from 'axios'
import {useLocation, Link } from 'react-router-dom'


import { server_access_point } from './config'



const EditUser = () => {

    const location = useLocation();
    const data = location.state;

    useEffect(()=>{ 
        axios.get(`${server_access_point}/edituser`, {
            headers :{
                "x-access-token" : localStorage.getItem("wedtoken")
            }
        }).catch(err => console.log(err))  
    },[]) 
    
    
         //form validaqtion using formik edit mechanic


         const formikEditUser = useFormik({
            initialValues: {
                username : data.username,
                email : data.email,
                mobileNO : data.mobileNO 
                },
    
            validationSchema:Yup.object().shape({
    
                username : Yup.string().required("userName Required"),

                mobileNO : Yup.string().required('Phone number is required').matches(/^\d+$/, 'Phone number must only contain numbers').min(10, 'Phone number must be exactly 10 digits').max(10, 'Phone number must be exactly 10 digits')

    
                }),
    
            onSubmit: async(values, {resetForm})=>{
    
                //console.log("addudser", values);
               
                await axios.put(`${server_access_point}/edituser/${data._id}`, values).then(res=>
                {
                    alert(res.data.message); 
    
                }).catch(err=>console.log(err));
    
                     resetForm({values : ""});             
                
            }               
    
        })


  return (

          
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content border-0">
                        <div className="modal-header p-4 pb-0">
                            <h5 className="modal-title" id="createMemberLabel">Edit User</h5>
                           
                        </div>
                        <div className="modal-body p-4">

                            <form autocomplete="on" id="memberlist-form" className="needs-validation" onSubmit={formikEditUser.handleSubmit} >
                                <div className="row">
                                    <div className="col-lg-12">
                                        
                                        <div className="mb-3 mt-4">
                                            <label htmlFor="teammembersName" className="form-label">Name</label>
                                            <input type="text" className="form-control" id="teammembersName" placeholder="Enter User Name" name='username' value={formikEditUser.values.username} onChange={formikEditUser.handleChange} />
                                            <div className="invalid-feedback">Please Enter a member name.</div>

                                            {(formikEditUser.touched.username && formikEditUser.errors.username) && <small style={{color:"red"}}>{formikEditUser.errors.username}</small>}
                                        </div>
                                        

                                        <div className="mb-3">
                                            <label htmlFor="teammembersEmail" className="form-label">Email</label>
                                            <input type="email" className="form-control" id="teammembersEmail" placeholder="Enter email" name='email' value={formikEditUser.values.email}  readOnly/>
                                            <div className="invalid-feedback">Please Enter a member Email.</div>
                                        </div>
                                       

                                        <div className="mb-3">
                                            <label htmlFor="teammembersnumbrs" className="form-label">Mobile Number</label>
                                            <input type="text" className="form-control" id="teammembersnumbers" placeholder="Enter Mobile Number" name='mobileNO' value={formikEditUser.values.mobileNO} onChange={formikEditUser.handleChange} />
                                            <div className="invalid-feedback">Please Enter a member mobile number.</div>

                                            {(formikEditUser.touched.mobileNO && formikEditUser.errors.mobileNO) && <small style={{color:"red"}}>{formikEditUser.errors.mobileNO}</small>}
                                        </div>
                                                                    
                                       
                                        <div className="hstack gap-2 justify-content-end">
                                            <Link to="/dashboard" className="btn btn-light" >Back To Dashboard</Link>
                                            <button type="submit" className="btn btn-success" id="addNewMember">Update User</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                {/*end modal-content*/}
                </div>
      
           
             
  )
}

export default EditUser