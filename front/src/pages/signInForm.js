import React, { Component } from 'react';
import { NavLink } from "react-router-dom";


class signInForm extends Component {
  constructor(props) {
    super(props);

    this.state={
      email:null,
      password:null
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    console.log(this.state)

  }

  handleChange(e){
    e.preventDefault()
    let target =e.target;
    let value = target.type ==="checkbox" ? target.checked : target.value;
    let name =target.name;

    this.setState(
      {
        [name]:value
      }
    );
  }
  render() {
    return (

      <div className="FormCenter">
        <div className="PageSwitcher">
          <NavLink to="/sign-in" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item ">Sign In</NavLink>
          <NavLink to="/sign-up" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item ">Sign Up</NavLink>
        </div>
        <div className="FormTitle">
          <NavLink to="/sign-in" activeClassName="FormTitle__Link--Active"
            className="FormTitle__Link">Sign In</NavLink> or <NavLink exact to="/sign-up"
              activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign Up</NavLink>
        </div>
        <form className="FormFields" onSubmit={this.handleSubmit}>

          <div className="FormFields">
            <label className="FormField__Label" htmlFor="email">Email</label>
            <input type="text" id="email" className="FormField__Input" placeholder="Enter your Email address" name="email" value={this.email} onChange={this.handleChange} />
          </div>
          <div className="FormFields">
            <label className="FormField__Label" htmlFor="password">Password</label>
            <input type="password" id="password" className="FormField__Input" placeholder="Enter your password" name="password" value={this.password}  onChange={this.handleChange}/>
          </div>

          <div className="FromFields">
            <button className="FormField__Button mr-20">Sign In </button>
          </div>
        </form>
      </div>
    );

  }
}

export default signInForm;