import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  // Check the pocket for the VIP ticket
  const token = localStorage.getItem("token");

  // If NO ticket, kick them to the sign-in page
  if (!token) {
    return <Navigate to="/signin" />;
  }

  // If HAVE ticket, open the door!
  return children;
};

export default ProtectedRoute;