import React from "react";
import AppTitle from "../shared/components/app-title/app-title";
import "./user-login.css";
export default function UserLogin() {
  return (
    <div className="login-container">
      <div className="login-first-subcontainer">
        <div className="app-title">
          <AppTitle />
        </div>
      </div>
      <div className="login-form-container"></div>
      <div className="login-second-subcontainer"></div>
    </div>
  );
}
