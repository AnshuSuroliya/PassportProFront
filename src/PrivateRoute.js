
import React from 'react';
import { Outlet,Navigate} from 'react-router-dom';
import Verification from './components/verify/Verification';

const PrivateRoute = () => {
    const success=localStorage.getItem("success");
      
    return (
     success ?  <Outlet/> : <Navigate to="/login"/>
      )
};


export default PrivateRoute;
