import React, { Component } from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import signUpForm from "./pages/signUpForm";
import signInForm from "./pages/signInForm";
import homeForm from './pages/homeForm'
import Navigation from "./Navigation"
import ForgetPassForm from "./pages/forgetPass"
import Download from "./pages/download"
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navigation/>
          <div className="App__Form">
            <Route exact path = "/" component={homeForm}></Route>
            <Route  path="/sign-up" component={signUpForm}></Route>
            <Route path="/sign-in" component={signInForm}></Route>
            <Route path="/forgetPass" component={ForgetPassForm}></Route>
            <Route path="/Download" component={Download}></Route>
          </div>
        </div>
      </BrowserRouter>
    );
  }

}

export default App;
