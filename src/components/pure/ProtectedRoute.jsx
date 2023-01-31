import React from 'react'
import { Navigate } from 'react-router-dom'

export default function ProtectedRoute({user , children}) {

  if(!user){
    alert("Debes ingresar sesion primero");
    return  <Navigate to="/login"/>
  }

  return children;
}
