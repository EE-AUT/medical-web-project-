import React ,{Component } from 'react';
import {  NavLink, Link  } from "react-router-dom";
import { Nav, Navbar} from 'react-bootstrap';



export class Navigation extends Component{
    render(){
        return(
            <Navbar className='NavBar'>
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav>
                <NavLink exact to="/" activeClassName="NavBarItem--Active" className="NavBarItem">Home</NavLink>
                <NavLink to="/Download" activeClassName="NavBarItem--Active" className="NavBarItem">Download</NavLink>
                <NavLink to="/sign-up" activeClassName="NavBarItem--Active" className="NavBarItem">Sign Up</NavLink>
                <NavLink to="/sign-in" activeClassName="NavBarItem--Active" className="NavBarItem">Sign In</NavLink>
                <Link to="/" className="NavBarItem-LogOut" >Log Out</Link>
                </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }

}

export default Navigation;