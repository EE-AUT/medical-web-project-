import React from 'react';
import "./toolBar.css"
import {  NavLink  } from "react-router-dom";
import DrawerToggleButton from "../slidDrawer/drawerToggleButton";
import * as actions from '../store/actions/auth'

const toolBar = props =>(
    <header className="toolBar">
        <nav className="toolBar_navigation">
            <div className="toolBarToggleButton">
                <DrawerToggleButton click={props.drawerClickHandler}/>
            </div>
                <div className="toolBar_navigation_item" >
                <div>
                <ul>
                <li><NavLink exact to="/" activeClassName="NavBarItem--Active" className="NavBarItem">Home</NavLink></li>
                <li><NavLink to="/documentation" activeClassName="NavBarItem--Active" className="NavBarItem">documentation</NavLink></li>
                <li><NavLink to="/Download" activeClassName="NavBarItem--Active" className="NavBarItem">Download</NavLink></li>
                <li hidden={actions.tokenConvertor(localStorage.getItem('token'))} ><NavLink to="/sign-up" activeClassName="NavBarItem--Active" className="NavBarItem" >Sign Up</NavLink></li>
                <li hidden={actions.tokenConvertor(localStorage.getItem('token'))}><NavLink to="/sign-in" activeClassName="NavBarItem--Active" className="NavBarItem" >Sign In</NavLink></li>
                {/* <div className="spacer"/> */}
                <li hidden={!actions.tokenConvertor(localStorage.getItem('token'))}><label className="NavBarItem-LogOut" onClick={actions.logout} >Log Out</label></li>
                </ul>
                </div>
            </div>
        </nav>
    </header>
);

export default toolBar