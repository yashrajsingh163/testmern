import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

export default function Auth() {

    const user  = localStorage.getItem("user");
  return (
    
    user ? <Outlet/> : <Navigate to="/"/>

  )
}
