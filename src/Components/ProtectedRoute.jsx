import React from 'react'
import {Navigate} from 'react-router-dom'
import { useUserAuth } from '../context/UserAuthContext'
import Home from './Home'
function ProtectedRoute({children}) {
   let { User } =useUserAuth()
   // let auth=false;
    if(!User){
    return <Navigate to="/"/>
    }

  return children;
 
}

export default ProtectedRoute
