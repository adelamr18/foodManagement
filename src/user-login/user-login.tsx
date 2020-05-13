import React from "react";
import AppTitle from "../shared/components/app-title/app-title";
import LoginForm from "../shared/components/login-form/login-form";
import { formTitles, appRoutes } from "../shared/constants/defines";
import "./user-login.css";

export default function UserLogin() {
  return (
    <div className="login-container">
      <div className="login-first-subcontainer">
        <div className="app-title-outer-container">
          <AppTitle />
        </div>
        <span id="login-form-title">{formTitles.loginTitle}</span>
      </div>
      <div className="login-form-container-outer">
        <LoginForm
          firstLabel={formTitles.email}
          secondLabel={formTitles.password}
          firstPlaceholderText={formTitles.emailPlaceholder}
          secondPlaceholderText={formTitles.passwordPlaceholder}
          firstButtonText={formTitles.login}
          secondButtonText={formTitles.forgetPassword}
          navigateToFirstButtonRoute={appRoutes.defaultPage}
          navigateToSecondButtonRoute={appRoutes.forgetPassword}
        />
      </div>
      <div className="login-second-subcontainer"></div>
    </div>
  );
}
