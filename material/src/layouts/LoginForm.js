import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { compose } from "redux";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import Popover from "@material-ui/core/Popover";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const styles = (theme) => ({
  typography: {
    padding: theme.spacing(2),
  },
});

export class LoginForm extends Component {
  state = {
    anchorEl: null,
  };

  static propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object,
  };

  handleClick = (e) => {
    this.setState({
      anchorEl: e.currentTarget,
    });
  };

  handleClose = () => {
    this.setState({
      anchorEl: null,
    });
  };

  render() {
    const { anchorEl } = this.state;
    const { classes, theme } = this.props;
    const open = Boolean(anchorEl);
    const id = open ? "simple-popover" : undefined;
    return (
      <div>
        <Button
          //   aria-describedby={id}
          //   variant="contained"
          color="inherit"
          onClick={this.handleClick}
        >
          Login
        </Button>
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={this.handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
        >
          <Typography className={classes.typography}>
            The content of the Popover.
          </Typography>
        </Popover>
      </div>
    );
  }
}

export default compose(withStyles(styles, { useTheme: true }))(LoginForm);
