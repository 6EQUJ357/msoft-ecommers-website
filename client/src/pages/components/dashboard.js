import React, {useState, useEffect, useContext} from 'react'
import { useNavigate, Navigate} from 'react-router-dom';
import axios from 'axios';
import { server_access_point } from './config';
import ChildDashboard from '../ChildComponents/childDashboard';

import { userstore } from '../../App';


 
const Dashboard = () => {

    const [loginuserData, setloginuserData] = useContext(userstore)
    //console.log("wwefgrg", loginuserData)

  const [resdata, setresdata] = useState([]); 

    const navigate = useNavigate();


    useEffect(()=>{ 
        axios.get(`${server_access_point}/dashboard`, {
            headers :{
                "x-access-token" : localStorage.getItem("webtoken")
            }
        }).then(res => {
            setresdata(res.data.data);
            setloginuserData(res.data.data);
        }).catch(err => console.log(err));
      
    },[]) 

    //no token 
    if(!localStorage.getItem("webtoken")){
      return <Navigate to="/signin" /> 
  }

  const logouthandle = ()=>{
      let userResponse = window.confirm("you want to logged out...")
      if(userResponse){
          localStorage.clear();
          navigate("/signin"); 
      } 
  }





  return (
    
    <div>
        
        {(resdata.userType === "admin") && <ChildDashboard value1={resdata} value2  = {logouthandle} />}

        {(resdata.userType === "user") && <ChildDashboard value1={resdata} value2  = {logouthandle} />}

    </div>
  )
}

export default Dashboard