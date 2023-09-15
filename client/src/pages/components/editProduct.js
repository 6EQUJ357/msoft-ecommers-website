import React, {useEffect} from 'react'
import { useFormik } from 'formik'
import * as Yup from "yup"
import axios from 'axios'
import {useLocation, Link } from 'react-router-dom'


import { server_access_point } from './config'



const EditProduct = () => {

    const location = useLocation();
    const ProductData = location.state;

    useEffect(()=>{ 
        axios.get(`${server_access_point}/editproduct`, {
            headers :{
                "x-access-token" : localStorage.getItem("wedtoken")
            }
        }).catch(err => console.log(err))  
    },[]) 
    
    
         //form validaqtion using formik edit mechanic


         const formikEditProduct = useFormik({
            initialValues: {
                productimg : [],
                productname : ProductData.productname,
                productcategory : ProductData.productcategory, 
                productprice : ProductData.productprice,
                productquantity : ProductData.productquantity,
                productdescription : ProductData.productdescription  
                },
        
            validationSchema:Yup.object().shape({
        
                productimg :  Yup.array().min(1,  'Please select at least one file')
                .of(
                    Yup.mixed()
                      .test('fileType', 'Only image files are allowed', (value) => {
                        return value && ['image/jpeg', 'image/png', 'image/jpg'].includes(value.type);
                      })
                      .test('fileSize', 'File size should be below 1MB', (value) => {
                        return value && value.size <= 1048576; // 1MB = 1048576 bytes
                      })
                  ),
        
              productname : Yup.string().required("Product Name Required"),
        
              productcategory : Yup.string().required("Select Category"),
        
              productprice : Yup.string().required('Product Price Required'),
              productquantity : Yup.string().required("Specify Quantity"),
              productdescription : Yup.string()
        
                }),
        
            onSubmit: async(values, {resetForm})=>{
                //console.log("product", values);
         
                const formData = new FormData();
                    for (let i = 0; i < values.productimg.length; i++) {
                        formData.append('productimg', values.productimg[i]);
                    }
        
                    formData.append("productname",values.productname)
                    formData.append("productcategory",values.productcategory)
                    formData.append("productprice", values.productprice)
                    formData.append("productquantity",values.productquantity)
                    formData.append("productdescription", values.productdescription)
               
                await axios.put(`${server_access_point}/editproduct/${ProductData._id}`, formData).then(res=>
                {
                    alert(res.data.message); 
        
                    resetForm({values : ""});
        
                }).catch(err=>console.log(err));
                
            }               
    
        })


        
//handle Image Change
const handleImageChange = (e)=>{
    const selectedImages = Array.from(e.target.files);
    formikEditProduct.setFieldValue('productimg', [...formikEditProduct.values.productimg, ...selectedImages]);
  
}

//handle Delete ProductImg
const handleDeleteProductImg = (index)=>{
    formikEditProduct.setFieldValue(
        'productimg',
        formikEditProduct.values.productimg.filter((_, i) => i !== index)
      );
}


  return (

          
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content border-0">
                        <div className="modal-header p-4 pb-0">
                            <h5 className="modal-title" id="createMemberLabel">Edit Product</h5>
                           
                        </div>
                        <div className="modal-body p-4">

                            <form autocomplete="on" id="memberlist-form" className="needs-validation" onSubmit={formikEditProduct.handleSubmit} >
                                <div className="row">
                                    <div className="col-lg-12">
                                        
                                        <div className="mb-3 mt-4">
                                            <label htmlFor="teammembersName" className="form-label">Product Name</label>
                                            <input type="text" className="form-control" id="teammembersName" placeholder="Enter Product Name" name='productname' value={formikEditProduct.values.productname} onChange={formikEditProduct.handleChange} />                                         
                                            {(formikEditProduct.touched.productname && formikEditProduct.errors.productname) && <small style={{color:"red"}}>{formikEditProduct.errors.productname}</small>}
                                        </div>
                                        

                                        <div className="mb-3">
                                            <label htmlFor="teammembersEmail" className="form-label">Product Category</label>
                                            <input type="text" className="form-control" id="teammembersEmail" placeholder="Enter Product Category" name='productcategory' value={formikEditProduct.values.productcategory}/>

                                            {(formikEditProduct.touched.productcategory && formikEditProduct.errors.productcategory) && <small style={{color:"red"}}>{formikEditProduct.errors.productcategory}</small>}
                                           
                                        </div>
                                       

                                        <div className="mb-3">
                                            <label htmlFor="teammembersnumbrs" className="form-label">Product Price</label>
                                            <input type="text" className="form-control" id="teammembersnumbers" placeholder="Enter Product Price" name='productprice' value={formikEditProduct.values.productprice} onChange={formikEditProduct.handleChange} />

                                            {(formikEditProduct.touched.productprice && formikEditProduct.errors.productprice) && <small style={{color:"red"}}>{formikEditProduct.errors.productprice}</small>}
                                        </div>


                                        <div className="mb-3">
                                            <label htmlFor="teammembersnumbrs" className="form-label">Product Quantity</label>
                                            <input type="text" className="form-control" id="teammembersnumbers" placeholder="Enter Product Quantity" name='productprice' value={formikEditProduct.values.productquantity} onChange={formikEditProduct.handleChange} />

                                            {(formikEditProduct.touched.productquantity && formikEditProduct.errors.productquantity) && <small style={{color:"red"}}>{formikEditProduct.errors.productquantity}</small>}
                                        </div>


                                        <div className="mb-3">
                                            <label htmlFor="teammembersnumbrs" className="form-label">Product Description</label>
                                            <input type="text" className="form-control" id="teammembersnumbers" placeholder="Enter Product Description" name='productprice' value={formikEditProduct.values.productdescription} onChange={formikEditProduct.handleChange} />
                                         
                                        </div>


                                        <div className="dropzone mb-3"> 
                                            <div className="fallback">
                                                <input name="productimg" type="file"  onChange={handleImageChange}  multiple= "multiple" />
                                                {(formikEditProduct.errors.productimg && formikEditProduct.touched.productimg)  ? <div style={{color:"red"}}>{formikEditProduct.errors.productimg}</div> : null}

                                                <div  style={{ display: 'flex', flexWrap: 'wrap'}}>
                                                    {formikEditProduct.values.productimg && Array.from(formikEditProduct.values.productimg).map((image, index) => (
                                                        <div className='position-relative m-3' key={index} >
                                                            <img
                                                                key={index}
                                                                src={URL.createObjectURL(image)}
                                                                alt={`Image ${index + 1}`}
                                                                style={{ width: '100px', height: '100px', objectFit: 'cover' }}
                                                            />
                                                            <button type='button' className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" 
                                                            onClick={()=>handleDeleteProductImg(index)}><i className="fas fa-trash"></i></button>
                                                        </div>
                                                    ))}
                                                </div>

                                                
                                                
                                                
                                            </div>
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

export default EditProduct