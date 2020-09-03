import React, { Component } from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import signUpForm from "./pages/signUpForm";
import signInForm from "./pages/signInForm";
import homeForm from './pages/homeForm'
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <Route></Route>
        <div className="App">
          <div className="App__Form">
            <Route exact path = "/" component={homeForm}></Route>
            <Route  path="/sign-up" component={signUpForm}></Route>
            <Route path="/sign-in" component={signInForm}></Route>

          </div>

        </div>
      </BrowserRouter>
    );
  }

}

export default App;
