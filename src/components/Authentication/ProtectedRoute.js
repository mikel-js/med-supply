import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ Component, ...rest }) => {
  const userId = localStorage.getItem('userId');
  const isAuthenticated = !!userId;

  return isAuthenticated ? <Component /> : <Navigate to='/' />;
};

export default ProtectedRoute;
