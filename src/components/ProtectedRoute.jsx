import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token");

  if (!token) {
    // لو مفيش توكن يحوله عالـ login
    return <Navigate to="/login" replace />;
  }

  // لو فيه توكن يعرض الصفحة العادية
  return children;
};

export default ProtectedRoute;
