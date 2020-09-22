import React, { Component } from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import signUpForm from "./pages/signUpForm";
import signInForm from "./pages/signInForm";
import homeForm from './pages/homeForm';
import ForgetPassForm from "./pages/forgetPass";
import Download from "./pages/download";
import documentation from "./pages/documentation";
import './App.css';
import Toolbar from './ToolBar/toolBar';
import SideDrawer from './slidDrawer/SideDrawer'
import BackDrops from './backDrops/backDrops'

class App extends Component {

  state={
    sideDrawerOpen:false
  }
  drawerToggleClickHandler=()=>{
    console.log("hiiiiiiii")
    this.setState((prevState)=>{
      return{sideDrawerOpen:!prevState.sideDrawerOpen};
    });
  };
  backDropClickHandler=()=>{
    this.setState({sideDrawerOpen:false})
  };

  render() {
    let backDrop;
    if(this.state.sideDrawerOpen){
   
      backDrop=<BackDrops click={this.backDropClickHandler}/>
    }
    return (
      <BrowserRouter>
        <div className="App">
          <Toolbar drawerClickHandler={this.drawerToggleClickHandler}/>
          <SideDrawer show={this.state.sideDrawerOpen}/>;
          {backDrop}
          <div className="App__Form">
            <Route exact path='/' component={homeForm}></Route>
            <Route path="/sign-up" component={signUpForm}></Route>
            <Route path="/sign-in" component={signInForm}></Route>
            <Route path="/forgetPass" component={ForgetPassForm}></Route>
            <Route path="/Download" component={Download}></Route>
            <Route path="/documentation" component={documentation}></Route>

          </div>
        </div>
      </BrowserRouter>
    );
  }
}



export default App
