import React from "react";
import "./App.css";
import UserLogin from "./user-login/user-login";
import { Route, Switch } from "react-router-dom";
import ForgetPassword from "./forget-password/forget-password";
import { appRoutes } from "./shared/constants/defines";
function App() {
  return (
    <div className="App">
      <div className="main-content-container">
        <Switch>
          <Route exact path={appRoutes.defaultPage} component={UserLogin} />
          <Route path={appRoutes.forgetPassword} component={ForgetPassword} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
