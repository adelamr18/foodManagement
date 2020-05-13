import React from "react";
import AppTitle from "../shared/components/app-title/app-title";
import LoginForm from "../shared/components/login-form/login-form";
import { formTitles, appRoutes } from "../shared/constants/defines";
import "./forget-password.css";

export default function ForgetPassword() {
  return (
    <div className="forget-password-container">
      <div className="forget-password-first-subcontainer">
        <div className="app-title-outer-container">
          <AppTitle />
        </div>
        <span id="reset-password-title">{formTitles.resetPassword}</span>
      </div>
      <div className="login-form-container-outer">
        <LoginForm
          firstLabel={formTitles.email}
          secondLabel={formTitles.email}
          firstPlaceholderText={formTitles.emailPlaceholder}
          secondPlaceholderText={formTitles.confirmEmailPlaceholder}
          firstButtonText={formTitles.resetPassword}
          secondButtonText={formTitles.returnToLogin}
          navigateToFirstButtonRoute={appRoutes.defaultPage}
          navigateToSecondButtonRoute={appRoutes.defaultPage}
        />
      </div>
      <div className="forget-password-second-subcontainer"></div>
    </div>
  );
}
