import React from "react";
import { useAuth } from "../contexts/AuthContext";
import { Navigate } from "react-router-dom";

export default function Home() {
  const { currentUser, logout } = useAuth();

  if (!currentUser) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>Welcome, {currentUser.email}</h2>
        <button onClick={logout}>
          Logout
        </button>
      </div>
    </div>
  );
}
