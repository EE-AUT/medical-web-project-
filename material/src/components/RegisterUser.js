import React, { Component, Fragment } from "react";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/typography";
import TextField from "@material-ui/core/TextField";
import { register } from "../actions/auth";
import { compose } from "redux";
import { connect } from "react-redux";
import Checkbox from "@material-ui/core/Checkbox";
import PropTypes from "prop-types";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import Icon from "@material-ui/core/Icon";
import Button from "@material-ui/core/Button";
import validator from "validator";

export class RegisterUser extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    register: PropTypes.func.isRequired,
    signupRes: PropTypes.object,
  };
  state = {
    userData: {
      email: "",
      phone: "",
      password: "",
      name: "",
      role: "user",
      doctorId: "",
    },
    is_doctor: false,
    terms: false,
    pass: "",
    passConf: "",
    errors: {
      name: {
        ok: true,
        msg: "",
      },
      email: {
        ok: true,
        msg: "",
      },
      phone: {
        ok: true,
        msg: "",
      },
      password: {
        ok: true,
        msg: "",
      },
      doctor_id: {
        ok: true,
        msg: "",
      },
    },
  };

  handleFullNamaChange = (e) => {
    const { userData } = this.state;
    userData.name = e.target.value;
    this.setState({ userData });
  };
  handleEmailChange = (e) => {
    const email = e.target.value;
    const { userData, errors } = this.state;
    if (email == "") {
      errors.email.ok = true;
      errors.email.msg = "";
      this.setState({ errors, userData });
    } else if (validator.isEmail(email)) {
      errors.email.ok = true;
      errors.email.msg = "";
    } else {
      errors.email.ok = false;
      errors.msg = "email is not valid";
    }
    userData.email = email;
    this.setState({ userData, errors });
  };
  handlePhoneChange = (e) => {
    const phone = e.target.value;
    const { userData, errors } = this.state;
    if (phone == "") {
      errors.phone.ok = true;
      errors.phone.msg = "";
    } else if (validator.isMobilePhone(phone, "fa-IR")) {
      errors.phone.ok = true;
      errors.phone.msg = "";
    } else {
      errors.phone.ok = false;
      errors.phone.msg = "phone number too short";
    }
    userData.phone = phone;
    this.setState({ userData, errors });
  };
  pass = (e) => {
    this.state.pass = e.target.value;
    this.handlePassword();
  };
  conf = (e) => {
    this.state.passConf = e.target.value;
    this.handlePassword();
  };
  handlePassword = () => {
    const { userData, errors } = this.state;
    if (this.state.pass == "" && this.state.passConf == "") {
      errors.password.ok = true;
      errors.password.msg = "";
    } else if (
      this.state.pass == this.state.passConf &&
      this.state.pass.length >= 8
    ) {
      errors.password.ok = true;
      errors.password.msg = "";
    } else {
      errors.password.ok = false;
      errors.password.msg = "password is too short";
      if (this.state.pass !== this.state.passConf)
        errors.password.msg = "password and confirmation doesn't match";
    }
    userData.password = this.state.pass;
    this.setState({ userData, errors });
  };
  submit = () => {
    this.props.register(this.state.userData);
  };
  render() {
    const { classes } = this.props;
    const { terms, userData, errors } = this.state;
    return (
      <div
        className="container"
        style={{
          maxWidth: "100%",
        }}
      >
        <div className="row" style={{ width: "100%", height: "100px" }}></div>
        <Typography variant="h4" style={{ marginBottom: "50px" }}>
          Register
        </Typography>
        <div className="row col-lg-5 col-md-7 col-sm-12">
          <Typography
            variant="h6"
            className="col-12"
            style={{ marginBottom: "10px" }}
          >
            Personal Information
          </Typography>
          <div className={`col-12 ${classes.textField}`}>
            <TextField
              style={{
                width: "100%",
              }}
              id="outlined-basic"
              label="Full Name"
              variant="outlined"
              value={userData.name}
              onChange={this.handleFullNamaChange}
            />
          </div>
          <div className={`col-md-6 col-sm-12 ${classes.textField}`}>
            <TextField
              style={{
                width: "100%",
              }}
              id="outlined-basic"
              label="Email"
              variant="outlined"
              onChange={this.handleEmailChange}
              value={userData.email}
              error={!errors.email.ok}
            />
          </div>
          <div className={`col-md-6 col-sm-12 ${classes.textField}`}>
            <TextField
              style={{
                width: "100%",
              }}
              id="outlined-basic"
              label="Phone"
              variant="outlined"
              onChange={this.handlePhoneChange}
              value={userData.phone}
              error={!errors.phone.ok}
            />
          </div>
        </div>
        <div className="row col-lg-5 col-md-7 col-sm-12">
          <Typography
            variant="h6"
            className="col-12"
            style={{ marginBottom: "10px", marginTop: "20px" }}
          >
            Security
          </Typography>
          <div className={`col-md-6 col-sm-12 ${classes.textField}`}>
            <TextField
              style={{
                width: "100%",
              }}
              id="filled-password-input"
              label="Password"
              type="password"
              value={this.state.pass}
              error={!errors.password.ok}
              onChange={this.pass}
              autoComplete="current-password"
              variant="outlined"
            />
          </div>
          <div className={`col-md-6 col-sm-12 ${classes.textField}`}>
            <TextField
              style={{
                width: "100%",
              }}
              id="filled-password-input"
              label="Verify Password"
              type="password"
              value={this.state.passConf}
              error={!errors.password.ok}
              onChange={this.conf}
              autoComplete="current-password"
              variant="outlined"
            />
          </div>
        </div>
        <div className="row col-lg-5 col-md-7 col-sm-12">
          <div className={`col-12 ${classes.textField}`}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={this.state.is_doctor}
                  onChange={(e) => {
                    userData.role = e.target.checked ? "doctor" : "user";
                    this.setState({
                      userData,
                      is_doctor: e.target.checked,
                    });
                  }}
                  name="gilad"
                />
              }
              label="I am a Docotor/Medic"
            />
          </div>
          <div
            hidden={!this.state.is_doctor}
            className={`col-sm-12 col-md-6 ${classes.textField}`}
          >
            <TextField
              style={{
                width: "100%",
              }}
              id="outlined-basic"
              label="Doctor ID"
              onChange={(e) => {
                userData.doctorId = e.target.value;
                this.setState({
                  userData,
                });
              }}
              variant="outlined"
            />
          </div>
          <div className={`col-12 ${classes.textField}`}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={terms}
                  onChange={(e) => this.setState({ terms: e.target.checked })}
                  name="terms"
                />
              }
              label="I agree to the Terms and Conditions"
            />
          </div>
        </div>
        <div className="row col-lg-5 col-md-7 col-sm-12">
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-end",
            }}
          >
            <Button
              variant="contained"
              color="default"
              className={classes.button}
            >
              Reset
            </Button>
            <Button
              variant="contained"
              color="primary"
              endIcon={<PersonAddIcon />}
              className={classes.button}
              onClick={this.submit}
            >
              Register
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

const styles = (theme) => ({
  root: {
    display: "flex",
    width: "100%",
    height: "100%",
    //     marginTop: theme.spacing(10),
  },
  button: {
    margin: theme.spacing(1),
  },
  avatarLarge: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  textField: {
    marginBottom: "5px",
  },
  //   main: {},
});
const mapStateToProps = (state) => ({
  signupRes: state.auth.signupRes,
});

export default compose(
  withStyles(styles),
  connect(mapStateToProps, { register })
)(RegisterUser);
