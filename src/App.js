import React from "react";
import AppContext from './components/context/AppContext'
import { Route, Switch } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login";
import Yba from "./pages/yba";

function App() {
  return (
    <AppContext.Provider isLoggedIn={true}>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/yba">
          <Yba />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
      </Switch>
    </AppContext.Provider>
  );
}

export default App;
