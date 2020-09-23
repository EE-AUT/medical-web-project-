import React from 'react';
import "./sideDrawer.css";
import {  NavLink  } from "react-router-dom";
import * as actions from '../store/actions/auth'

const sideDrawer =props => {
    
    
    let drawClasses ='sideDrawer';
    if (props.show){
        drawClasses ='sideDrawer open';
    };
    return(
    <nav className={drawClasses}>
        <ul>
            <li><img src={"https://i.ibb.co/pW4Sckf/icon.png"} alt="" className="logo"></img></li>
            <li><NavLink exact to="/" activeClassName="sideDrawItem--Active" >Home</NavLink></li>
            <li><NavLink to="/documentation" activeClassName="sideDrawItem--Active" >Documentation</NavLink></li>
            <li><NavLink to="/Download" activeClassName="sideDrawItem--Active" >Download</NavLink></li>
            <li hidden={actions.tokenConvertor(localStorage.getItem('token'))}><NavLink to="/sign-up" activeClassName="sideDrawItem--Active"  >Sign Up</NavLink></li>
            <li hidden={actions.tokenConvertor(localStorage.getItem('token'))}><NavLink to="/sign-in" activeClassName="sideDrawItem--Active" >Sign In</NavLink></li>
            <li hidden={!actions.tokenConvertor(localStorage.getItem('token'))}><label className="sideDrawItem-LogOut" onClick={actions.logout} >Log Out</label></li>
        </ul>
    </nav>
    );
};


export default sideDrawer;