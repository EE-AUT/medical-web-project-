import React, { Component } from 'react';
import { NavLink, Link } from "react-router-dom";
import { connect } from 'react-redux'
import * as actions from '../store/actions/auth'
import axios from 'axios'


class signInForm extends Component {
  constructor(props) {
    super(props);

    this.state={
      email:"",
      password:""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    axios.post('http://localhost:8000/api_user/login/', {
      password: this.state.password,
      username: this.state.email
    })
    .then(res => {
        const token = res.data.token;
        // if token null it's mean doctor not register yet
        localStorage.setItem('token', token);
        localStorage.setItem('signInError',0)
        console.log("sign in True")
        console.log(token)

    })
    .catch(err => {
        localStorage.setItem('signInError',1)
        console.log("error in sign in")

    })
  
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
      <div>
      <div className="FormCenter" hidden={actions.tokenConvertor(localStorage.getItem('token'))? true : false}>
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
            <Link to="/forgetPass" className="FormField__ForgetPass--Link ">Forget your password ? </Link>
          </div>
          {/* <label className= "errorMassage_Image" >Your email or password is incorrect </label> */}
        </form>
      </div>
      <div hidden={actions.tokenConvertor(localStorage.getItem('token'))? false : true}>
        <h1>you should logout and then you can Sign up or Sign in again</h1>
      </div>
      </div>
    );

  }
}



const mapStateToProps = (state) => {
  return {
      loading: state.loading,
      error: state.error
  }
}

const mapDispatchToProps = dispatch => {
  return {
      onAuth: (username, password) => dispatch(actions.authLogin(username, password))
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(signInForm);