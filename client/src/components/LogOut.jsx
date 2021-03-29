import React from "react";
import { Redirect } from "react-router";
import { useAuth } from "../context/AuthContext";
export default function LogOut() {
  sessionStorage.removeItem("token");
  const { signOut } = useAuth();
  signOut();
  return <Redirect to="/login" />;
}
