// const { Component } = require("react")

import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import { connect } from 'react-redux'
import * as actions from '../store/actions/auth'

const emailRegex = RegExp(/^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/);

const formValid = ({ formErrors, doctorID, ...rest }) => {
    let valid = true

    Object.values(formErrors).forEach(val => { val.length > 0 && (valid = false) });
    Object.values(rest).forEach(val => {
        val.length === 0 && (valid = false)
    });

    if (rest.isDoctor && doctorID.length === 0) {
        valid = false
    }

    return valid;

};

class signUpForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            fullName: "",
            email: "",
            phoneNumber:"",
            password: "",
            rePassword: "",
            isDoctor: false,
            doctorID: "",
            formErrors: {
                fullName: "",
                email: "",
                phoneNumber:"",
                password: "",
                rePassword: "",
            }
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();

        if (formValid(this.state)) {
            console.log('submited');
            console.log(this.state)
            this.props.onRegister(this.state.email, this.state.password, this.state.fullName, this.state.phoneNumber, this.state.isDoctor, this.state.doctorID)
        }
        else {
            console.log("Error")

        }

    }

    handleChange(e) {
        let target = e.target;
        let value = target.type === "checkbox" ? target.checked : target.value;
        let name = target.name;

        let formErrors = this.state.formErrors;

        switch (name) {
            case 'fullName':
                formErrors.fullName = value.length < 1 ? 'Please fill out this feild' : '';
                break;
            case 'email':
                formErrors.email = emailRegex.test(value) ? '' : 'Invalid email address';
                break;
            case 'phoneNumber':
                formErrors.phoneNumber= value.length ===11 ?'':'Minimum 11 numbers required';
                break
            case 'password':
                formErrors.password = value.length < 6 ? 'Minimum 6 characters required' : '';
                break;
            case 'rePassword':
                formErrors.rePassword = this.state.password !== value ? 'Password are not matching' : '';
                break;
            case 'doctorID':
                formErrors.doctorID = value.length < 1 ? 'Please fill out this feild' : '';
                break;
            default:
        }

        this.setState(
            {
                formErrors,
                [name]: value,
            }
            // , () => console.log(this.state)
        );
    }
    render() {
        const { formErrors } = this.state;
        return (
            <div className="FormCenter" >
                <div className="PageSwitcher">
                    <NavLink to="/sign-in" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item ">Sign In</NavLink>
                    <NavLink to="/sign-up" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item ">Sign Up</NavLink>
                </div>
                <div className="FormTitle">
                    <NavLink to="/sign-in" activeClassName="FormTitle__Link--Active"
                        className="FormTitle__Link">Sign In</NavLink> or <NavLink exact to="/sign-up"
                            activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign Up</NavLink>
                </div>
                <form className="FormFields"
                    onSubmit={this.handleSubmit} >

                    <div className="FormFields" >
                        <label className="FormField__Label"
                            htmlFor="fullName" > full Name </label>
                        <input type="text"
                            id="fullName"
                            className={formErrors.fullName.length > 0 ? "errorInput" : "FormField__Input"}
                            placeholder="Enter your full name"
                            name="fullName"
                            onChange={this.handleChange}
                            value={this.state.fullName} />
                    </div>
                    {(<span className="errorMassage">{formErrors.fullName}</span>)}

                    <div className="FormFields" >

                        <label className="FormField__Label"
                            htmlFor="email" > Email </label>
                        <input type="text"
                            id="email"
                            className={formErrors.email.length > 0 ? "errorInput" : "FormField__Input"}
                            placeholder="Enter your Email address"
                            name="email"
                            onChange={this.handleChange}
                            value={this.state.email} />
                    </div>
                    {(<span className="errorMassage">{formErrors.email}</span>)}

                    <div className="FormFields">
                        <label className="FormField__Label" htmlFor="Phone Number">phone number</label>
                        <input type="text" id="phoneNumber" className="FormField__Input" placeholder="Enter your phone number" name="phoneNumber" value={this.phoneNumber} onChange={this.handleChange} />
                    </div>
                    {(<span className="errorMassage">{formErrors.phoneNumber}</span>)}

                    <div className="FormFields" >
                        <label className="FormField__Label"
                            htmlFor="password" > Password </label>
                        <input type="password"
                            id="password"
                            className={formErrors.password.length > 0 ? "errorInput" : "FormField__Input"}
                            placeholder="Enter your password"
                            name="password"
                            onChange={this.handleChange}
                            value={this.state.password} />
                    </div>
                    {(<span className="errorMassage">{formErrors.password}</span>)}

                    <div className="FormFields" >
                        <label className="FormField__Label"
                            htmlFor="repeat password" > Repeat Password </label>
                        <input type="password"
                            id="rePassword"
                            className={formErrors.rePassword.length > 0 ? "errorInput" : "FormField__Input"}
                            placeholder="Repeat your password"
                            name="rePassword"
                            onChange={this.handleChange}
                            value={this.state.rePassword}
                        />
                    </div>
                    {(<span className="errorMassage">{formErrors.rePassword}</span>)}

                    <div className="FormFields" >
                        <label className="FormField__CheckboxLabel" >

                            <input className="FormField__Checkbox"
                                type="checkbox"
                                id="isDoctor"
                                name="isDoctor"
                                onChange={this.handleChange}
                                checked={this.state.isDoctor}
                            /> Are you a doctor ?</label>
                    </div>
                    <div className="FormFields" >

                        <input type="text"
                            id="doctorID"
                            className="FormField__Input"
                            placeholder="Enter your doctorID"
                            name="doctorID"
                            hidden={this.state.isDoctor ? false : true}
                            onChange={this.handleChange}
                            value={this.state.doctorID} />
                    </div >
                    {(<span className="errorMassage">{formErrors.doctorID}</span>)}


                    <div className="FromFields" >
                        <button className="FormField__Button mr-20" onClick={this.handleSubmit} > Sign Up </button>
                    </div >
                </form>
            </div >
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
      onRegister: (email, password, FullName, phoneNumber, is_doctor, doctor_id) => 
            dispatch(actions.authSignup(email, password, FullName, phoneNumber, is_doctor, doctor_id))
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(signUpForm);