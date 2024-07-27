import React from 'react';
import { Navigate } from 'react-router-dom';

const isAuthenticated = () => {
  return !!sessionStorage.getItem('accessJWT'); 
};

const PrivateRoute = ({ element, ...rest }) => {
  return isAuthenticated() ? element : <Navigate to="/login" />;
};

export default PrivateRoute;

