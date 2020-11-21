import React, { Component, Fragment } from "react";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/typography";
import TextField from "@material-ui/core/TextField";
import { login } from "../actions/auth";
import { compose } from "redux";
import { connect } from "react-redux";
import Checkbox from "@material-ui/core/Checkbox";
import PropTypes from "prop-types";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import Icon from "@material-ui/core/Icon";
import Button from "@material-ui/core/Button";
import validator from "validator";

export class LoginUser extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    login: PropTypes.func.isRequired,
    signupRes: PropTypes.object,
  };
  state = {
    userData: {
      email: "",
      password: "",
    },
  };

  handleEmailChange = (e) => {
    const email = e.target.value;
    const { userData } = this.state;
    userData.email = email;
    this.setState({ userData });
  };
  handlePasswordChange = (e) => {
    const password = e.target.value;
    const { userData } = this.state;
    userData.password = password;
    this.setState({ userData });
  };
  submit = () => {
    this.props.login(this.state.userData);
  };
  render() {
    const { classes } = this.props;
    const { userData } = this.state;
    const { handleEmailChange, handlePasswordChange, submit } = this;
    return (
      <div
        className="container"
        style={{
          maxWidth: "100%",
        }}
      >
        <TextField
          style={{
            width: "100%",
          }}
          id="outlined-basic"
          label="Email"
          variant="outlined"
          className={classes.textField}
          onChange={handleEmailChange}
          value={userData.email}
          // error={!errors.email.ok}
        />
        <TextField
          style={{
            width: "100%",
          }}
          id="filled-password-input"
          label="Password"
          type="password"
          className={classes.textField}
          value={userData.password}
          // error={!errors.password.ok}
          onChange={handlePasswordChange}
          autoComplete="current-password"
          variant="outlined"
        />
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end",
          }}
        >
          <Button
            style={{ margin: 0 }}
            variant="contained"
            color="primary"
            endIcon={<VpnKeyIcon />}
            className={classes.button}
            onClick={submit}
          >
            Login
          </Button>
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
  auth: state.auth,
});

export default compose(
  withStyles(styles),
  connect(mapStateToProps, { login })
)(LoginUser);
