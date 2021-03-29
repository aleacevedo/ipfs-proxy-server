import React from "react";
import { Redirect } from "react-router";
import { useAuth } from "../context/AuthContext";
export default function LogOut() {
  sessionStorage.removeItem("token");
  useAuth();
  return <Redirect to="/login" />;
}
