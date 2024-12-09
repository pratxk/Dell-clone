import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const userRole = JSON.parse(localStorage.getItem("role"));

  if (userRole !== "admin") {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default PrivateRoute;
