import React from "react";
import { Navigate } from "react-router-dom";
function Protected({ children }) {
  return localStorage.getItem("token") && localStorage.getItem("buyerId") ? (
    children
  ) : (
    <Navigate to="/" />
  );
}

export default Protected;
