import React ,{Component } from 'react';
import {  NavLink  } from "react-router-dom";
import { Nav, Navbar} from 'react-bootstrap';
import * as actions from './store/actions/auth'



export class Navigation extends Component{
    render(){
        if(actions.tokenConvertor(localStorage.getItem('token'))){
        return(
            <Navbar className='NavBar'>
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav>
                <NavLink exact to="/" activeClassName="NavBarItem--Active" className="NavBarItem">Home</NavLink>
                <NavLink to="/documentation" activeClassName="NavBarItem--Active" className="NavBarItem">documentation</NavLink>
                <NavLink to="/Download" activeClassName="NavBarItem--Active" className="NavBarItem">Download</NavLink>
                <label className="NavBarItem-LogOut" onClick={actions.logout} >Log Out</label>
                </Nav>
                </Navbar.Collapse>
            </Navbar>
        )}
        else{
        return(
            <Navbar className='NavBar'>
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav>
                <NavLink exact to="/" activeClassName="NavBarItem--Active" className="NavBarItem">Home</NavLink>
                <NavLink to="/documentation" activeClassName="NavBarItem--Active" className="NavBarItem">documentation</NavLink>
                <NavLink to="/Download" activeClassName="NavBarItem--Active" className="NavBarItem">Download</NavLink>
                <NavLink to="/sign-up" activeClassName="NavBarItem--Active" className="NavBarItem" >Sign Up</NavLink>
                <NavLink to="/sign-in" activeClassName="NavBarItem--Active" className="NavBarItem" >Sign In</NavLink>
                </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
        }
    }

}

export default Navigation;