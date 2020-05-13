import React from "react";
import "./App.css";
import UserLogin from "./user-login/user-login";
import { Route, Switch } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <div className="main-content-container">
        <Switch>
          <Route exact path="/" component={UserLogin} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
