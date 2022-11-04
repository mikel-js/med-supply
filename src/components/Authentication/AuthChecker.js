import React from 'react';

const AuthChecker = () => {
  const userId = localStorage.getItem('userId');
  const isAuthenticated = !!userId;
  return { isAuthenticated };
};

export default AuthChecker;
