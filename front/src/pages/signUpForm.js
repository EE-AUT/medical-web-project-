// const { Component } = require("react")

import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import axios from 'axios'
import { connect } from 'react-redux'
import * as actions from '../store/actions/auth'

const emailRegex = RegExp(/^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/);

const formValid = ({ fullNameError_hidden, emailError_hidden, phoneNumberError_hidden, passwordError_hidden, rePasswordError_hidden, doctorIDError_hidden, isDoctor, doctorID }) => {
    let valid = false
    if (fullNameError_hidden && emailError_hidden && passwordError_hidden && rePasswordError_hidden && phoneNumberError_hidden && doctorIDError_hidden) {
        valid = true
    }

    if (isDoctor && doctorID.length === 0) {
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
            phoneNumber: "",
            password: "",
            rePassword: "",
            isDoctor: false,
            doctorID: "",

            fullNameError_hidden: true,
            emailError_hidden: true,
            phoneNumberError_hidden: true,
            passwordError_hidden: true,
            rePasswordError_hidden: true,
            doctorIDError_hidden: true,
            signUpError_hidden: true
            // You already have an account
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        let need_to_return=false
        if (this.state.fullName.length < 1) {
            // this.state.fullNameError_hidden=false
            this.setState({ fullNameError_hidden: false })
            need_to_return=true;
        }
        if (!emailRegex.test(this.state.email)) {
            this.setState({ emailError_hidden: false })
            need_to_return=true;
        }
        if (this.state.phoneNumber.length !== 11) {
            this.setState({ phoneNumberError_hidden: false })
            need_to_return=true;
        }
        if (this.state.password < 6) {
            this.setState({ passwordError_hidden: false })
            need_to_return=true;
        }
        if (this.state.password !== this.state.rePassword) {
            this.setState({ rePasswordError_hidden: false })
            need_to_return=true;
        }
        if (this.state.isDoctor && this.state.doctorID < 1) {
            this.setState({ doctorIDError_hidden: false })
            need_to_return=true;
        }
        if (need_to_return){
            return;
        }

        if (formValid(this.state)) {
            console.log('submited');
            // this.props.onRegister(this.state.email, this.state.password, this.state.fullName, this.state.phoneNumber, this.state.isDoctor, this.state.doctorID)
            // this.props.history.push('/sign-in')
            axios.post('http://localhost:8000/api_user/register/', {
                email: this.state.email,
                phone_number: this.state.phoneNumber,
                password: this.state.password,
                full_name: this.state.fullName,
                register_type: "web_register",
                is_doctor: this.state.isDoctor,
                doctor_id: this.state.doctorID
            })
            .then(res => {
                console.log(res)
                console.log(res.data.email.length)
                if (res.data.email.length === 1){
                    localStorage.setItem('signUpError',1)
                    console.log("user already exist")
                }
                else{
                    localStorage.setItem('signUpError',0)
                    this.props.history.push('/sign-in')
                }

            })
            .catch(err=> {
                localStorage.setItem('signUpError',1)
                console.log("error")
                console.log(err.response)
            })

        }
        else {
            console.log("Error")
        }

    }

    handleChange(e) {
        let target = e.target;
        let value = target.type === "checkbox" ? target.checked : target.value;
        let name = target.name;

        switch (name) {
            case 'fullName':
                this.setState({ fullNameError_hidden: true });
                break;
            case 'email':
                this.setState({ emailError_hidden: true });
                break;
            case 'phoneNumber':
                this.setState({ phoneNumberError_hidden: true });
                break;
            case 'password':
                this.setState({ passwordError_hidden: true });
                break;
            case 'rePassword':
                this.setState({ rePasswordError_hidden: true });
                break;
            case 'doctorID':
                this.setState({ doctorIDError_hidden: true });
                break;
            default:
                break;
        }

        this.setState(
            {
                [name]: value
            }
        );
    }
    render() {
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
                            className={this.state.fullNameError_hidden ? "FormField__Input" : "errorInput"}
                            placeholder="Enter your full name"
                            name="fullName"
                            onChange={this.handleChange}
                            value={this.state.fullName} />
                    </div>
                    {(<span className="errorMassage" hidden={this.state.fullNameError_hidden}>Please fill out this feild</span>)}

                    <div className="FormFields" >

                        <label className="FormField__Label"
                            htmlFor="email" > Email </label>
                        <input type="text"
                            id="email"
                            className={this.state.emailError_hidden ? "FormField__Input" : "errorInput"}
                            placeholder="Enter your Email address"
                            name="email"
                            onChange={this.handleChange}
                            value={this.state.email} />
                    </div>
                    {(<span className="errorMassage" hidden={this.state.emailError_hidden}>Invalid email address</span>)}

                    <div className="FormFields">
                        <label className="FormField__Label" htmlFor="Phone Number">phone number</label>
                        <input type="text" id="phoneNumber"
                        className={this.state.phoneNumberError_hidden ? "FormField__Input" : "errorInput"}
                        placeholder="Enter your phone number" name="phoneNumber" value={this.phoneNumber} onChange={this.handleChange} />
                    </div>
                    {(<span className="errorMassage" hidden={this.state.phoneNumberError_hidden}>Minimum 11 numbers required</span>)}

                    <div className="FormFields" >
                        <label className="FormField__Label"
                            htmlFor="password" > Password </label>
                        <input type="password"
                            id="password"
                            className={this.state.passwordError_hidden ? "FormField__Input" : "errorInput"}
                            placeholder="Enter your password"
                            name="password"
                            onChange={this.handleChange}
                            value={this.state.password}
                        />
                    </div>
                    {(<span className="errorMassage" hidden={this.state.passwordError_hidden} >Minimum 6 characters required</span>)}

                    <div className="FormFields" >
                        <label className="FormField__Label"
                            htmlFor="repeat password" > Repeat Password </label>
                        <input type="password"
                            id="rePassword"
                            className={this.state.rePasswordError_hidden ? "FormField__Input" : "errorInput"}
                            placeholder="Repeat your password"
                            name="rePassword"
                            onChange={this.handleChange}
                            value={this.state.rePassword}
                        />
                    </div>
                    {(<span className="errorMassage" hidden={this.state.rePasswordError_hidden} >Passwords are not matching</span>)}

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
                            className={this.state.doctorIDError_hidden ? "FormField__Input" : "errorInput"}
                            placeholder="Enter your doctorID"
                            name="doctorID"
                            hidden={this.state.isDoctor ? false : true}
                            onChange={this.handleChange}
                            value={this.state.doctorID} />
                    </div >
                    {(<span className="errorMassage" hidden={this.state.doctorIDError_hidden}>Please fill out this feild</span>)}


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