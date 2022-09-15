import React from "react";
import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { UserContext } from "../context/user-context";

const ProtectedRoute = () => {
  const userCtx = useContext(UserContext);

  return localStorage.getItem("buzzaar") ? (
    <Outlet />
  ) : (
    <Navigate to="/user/login" />
  );
};

export default ProtectedRoute;
