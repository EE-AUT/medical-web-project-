import React, { Component } from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from 'react-redux'
import signUpForm from "./pages/signUpForm";
import signInForm from "./pages/signInForm";
import homeForm from './pages/homeForm'
import Navigation from "./Navigation"
import ForgetPassForm from "./pages/forgetPass"
import Download from "./pages/download"
import './App.css';
import * as actions from './store/actions/auth'

class App extends Component {
  componentDidMount() {
    this.props.onTryAutoSignup();
  }
  render() {
    // console.log(this.props.isAuthenticated, "tset")
    return (
      <BrowserRouter>
        <div className="App">
          <Navigation/>
          <div className="App__Form">
            <Route exact path='/' component={homeForm}></Route>
            <Route path="/sign-up" component={signUpForm}></Route>
            <Route path="/sign-in" component={signInForm}></Route>
            <Route path="/forgetPass" component={ForgetPassForm}></Route>
            <Route path="/Download" component={Download}></Route>

            {/* <Route exact path = "/" component={ homeForm } render={(props) => <homeForm text="Hello, " {...this.props} />}/>
            <Route path="/sign-up" component={signUpForm} render={(props) => <signUpForm  {...this.props} />}/>
            <Route path="/sign-in" component={signInForm} render={(props) => <signInForm  {...this.props} />}/>
            <Route path="/forgetPass" component={ForgetPassForm} render={(props) => <ForgetPassForm  {...this.props} />}/>
            <Route path="/Download" component={Download} render={(props) => <Download  {...this.props} />}/> */}

          </div>
        </div>
      </BrowserRouter>
    );
  }
}


// we can all this in each one of component

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState())
  }
}


const mapStateToProps = state => {
  return{
    isAuthenticated: state.token !== null
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)


// export default connect(
//   state => {
//     return{
//       isAuthenticated: state.token !== null
//     }
//   },
//   dispatch => {
//     return {
//       onTryAutoSignup: () => dispatch(actions.authCheckState())
//     }
//   }
//   )(App);
