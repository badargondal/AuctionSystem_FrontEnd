import React from "react";
import { Navigate } from "react-router-dom";
function ProtectedSeller({ children }) {
  return localStorage.getItem("token") && localStorage.getItem("sellerId") ? (
    children
  ) : (
    <Navigate to="/seller/login" />
  );
}

export default ProtectedSeller;
