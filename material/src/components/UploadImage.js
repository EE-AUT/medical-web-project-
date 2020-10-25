import React, { Component, Fragment } from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import { green, red } from "@material-ui/core/colors";

import Typography from "@material-ui/core/Typography";

const styles = (theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  input: {
    display: "none",
  },
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  actionsContainer: {
    marginBottom: theme.spacing(2),
  },
  wrapper: {
    margin: theme.spacing(1),
    position: "relative",
  },
  buttonSuccess: {
    backgroundColor: green[500],
    "&:hover": {
      backgroundColor: green[700],
    },
  },
  buttonFailed: {
    backgroundColor: red[500],
    "&:hover": {
      backgroundColor: red[700],
    },
  },
  buttonProgress: {
    color: green[500],
    position: "absolute",
    top: "50%",
    left: "50%",
    marginTop: -12,
    marginLeft: -12,
  },
});

export class UploadImage extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
  };
  state = {
    NextDisabled: true,
    uploading: false,
    success: false,
    failed: false,
    fileSelected: false,
  };

  componentWillReceiveProps(props) {
    if (props.values.fileUploaded) {
      this.setState({
        success: true,
        uploading: false,
        failed: false,
        NextDisabled: false,
      });
    } else if (this.state.fileSelected) {
      this.setState({
        success: false,
        uploading: false,
        failed: true,
      });
    }
  }

  handleUploadButton = (e) => {
    if (!this.state.uploading) {
      this.setState({
        success: false,
        // uploading: true,
        failed: false,
      });
    }
  };

  handleFileChange = (e) => {
    if (!this.state.uploading) {
      let fileSelected = e.target.files.length > 0;
      this.setState({
        success: false,
        uploading: fileSelected,
        fileSelected: fileSelected,
        failed: false,
        NextDisabled: true,
      });
      if (fileSelected) {
        this.props.handleFileChange(e);
      }
    }
  };

  render() {
    const { uploading, success, failed } = this.state;
    const { classes, fileUploaded } = this.props;
    const uploadButtonClassname = clsx({
      [classes.buttonSuccess]: success,
      [classes.buttonFailed]: failed,
    });
    return (
      <Fragment>
        <Typography>
          Please Select an image of your/your patient's Chest X-ray
        </Typography>
        <div className={classes.actionsContainer}>
          <div>
            {/* <Button
              disabled={true}
              onClick={this.props.handleBack}
              className={classes.button}
            >
              Back
            </Button> */}
            <input
              accept="image/*"
              className={classes.input}
              id="contained-button-file"
              multiple
              type="file"
              onChange={this.handleFileChange}
            />

            <label className={classes.wrapper} htmlFor="contained-button-file">
              <Button
                variant="contained"
                disabled={uploading}
                onClick={this.handleUploadButton}
                className={uploadButtonClassname}
                color="primary"
                component="span"
              >
                Upload
              </Button>
              {uploading && (
                <CircularProgress
                  size={24}
                  className={classes.buttonProgress}
                />
              )}
            </label>
            <Button
              color="primary"
              disabled={this.state.NextDisabled}
              onClick={this.props.handleNext}
              className={classes.button}
            >
              Next
            </Button>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default withStyles(styles)(UploadImage);
