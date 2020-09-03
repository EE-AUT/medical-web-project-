import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

class forgetPass extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: ""
        }

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
      }, () => console.log(this.state)
    );
}

    render() {
        return (
            <div className="FormCenter">
                <div className="PageSwitcher">
                    <NavLink to="/sign-in" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item ">Sign In</NavLink>
                    <NavLink to="/sign-up" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item ">Sign Up</NavLink>
                </div>
                <div>
                    <label className="forgetPass-text"  > Don't worry . Password recovery is easy</label>
                </div>
                <label className="forgetPass-text"  > Just enter your email and we will send you an email containing your password</label>

                <div className="FormFields">
                    <label className="FormField__Label" htmlFor="email">Email</label>
                    <input type="text" id="email" className="FormField__Input"
                    placeholder="Enter your Email address" name="email" value={this.email} onChange={this.handleChange} />
                </div>
                <div className="FromFields">
                    <button className="FormField__Button mr-20" onClick={this.handleSubmit}> Send </button>
                </div>
            </div>
        );
    }
}


export default forgetPass;