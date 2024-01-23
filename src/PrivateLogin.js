import React from 'react';
import { Outlet,Navigate} from 'react-router-dom';
const PrivateLogin=()=>{
    const success=localStorage.getItem("success");
      
    return (
     success ?  <Navigate to="/"/> : <Outlet/>
      )
}
export default PrivateLogin;