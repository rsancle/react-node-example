import React from "react";
import { useLocation, Navigate } from "react-router-dom";
import useAuth from "../hooks/use-auth";

const RequireAuth = ({ children }) => {
  let auth = useAuth();
  let location = useLocation();

  if (!auth.isLoggedIn) {
    return <Navigate to="/sign-in" state={{ from: location }} replace />;
  }

  return children;
};

export default RequireAuth;
