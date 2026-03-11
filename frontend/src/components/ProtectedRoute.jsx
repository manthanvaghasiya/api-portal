import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  // 1. Check if the user has a secret ticket (token) in their browser
  const token = localStorage.getItem('token');

  // 2. If they do NOT have a ticket, send them straight to the Login page!
  if (!token) {
    return <Navigate to="/signin" replace />;
  }

  // 3. If they DO have a ticket, let them inside the Sandbox!
  return children;
};

export default ProtectedRoute;