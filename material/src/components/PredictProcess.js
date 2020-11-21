import React, { Component, Fragment } from "react";
import clsx from "clsx";
import { compose } from "redux";
// import { connect } from "react-redux";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import Typography from "@material-ui/core/Typography";
// import { predictScore } from "../actions/images";
import Alert from "@material-ui/lab/Alert";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";

const styles = (theme) => ({});

export class PredictProcess extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
  };
  state = {
    predicted: true,
    score: 0,
    imageId: 0,
    dialogOpen: false,
    path: "",
  };

  handleDialogOpen = () => {
    this.setState({
      dialogOpen: true,
    });
  };

  handleDialogClose = () => {
    this.setState({
      dialogOpen: false,
    });
  };

  componentDidMount() {
    // console.log(this.props.values.file);
    this.setState({
      score: this.props.values.file.score,
      imageId: this.props.values.file.id,
      path: this.props.values.file.name,
    });
  }

  render() {
    const { predicted, score, imageId, dialogOpen, path } = this.state;
    const { classes, theme } = this.props;
    const severity = clsx({
      success: score <= 20,
      warning: score < 50 && score > 20,
      error: score >= 50,
    });
    // const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));
    const fullScreen = false;

    return (
      <Fragment>
        {!predicted && (
          <Fragment>
            <CircularProgress color="secondary" />
            <Typography>Processing Your derm image...</Typography>
          </Fragment>
        )}

        {predicted && (
          <Fragment>
            <Card>
              <CardActionArea>
                <CardMedia
                  onClick={this.handleDialogOpen}
                  style={{ height: "250px" }}
                  image={`http://localhost:3005/${path}`}
                  title="X-ray image"
                />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="h2">
                    Melanoma Test Result
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    <Alert severity={severity}>
                      The chance of you have Melanoma is{" "}
                      <strong>
                        {(Math.round(score * 100) / 100).toFixed(2)}
                      </strong>
                      <br />
                      {score >= 50 &&
                        "Please refer to a doctor as soon as possible"}
                    </Alert>
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button
                  size="small"
                  onClick={this.props.handleBack}
                  color="primary"
                >
                  New Test
                </Button>
              </CardActions>
            </Card>
            <Dialog
              fullScreen={fullScreen}
              open={dialogOpen}
              onClose={this.handleDialogClose}
              aria-labelledby="responsive-dialog-title"
            >
              <DialogTitle id="responsive-dialog-title">
                {"Your X-Ray Image"}
              </DialogTitle>
              <DialogContent>
                <img
                  style={{ width: "100%" }}
                  src={`http://localhost:3005/${path}`}
                />
              </DialogContent>
              <DialogActions>
                <Button
                  autoFocus
                  onClick={this.handleDialogClose}
                  color="primary"
                >
                  Close
                </Button>
              </DialogActions>
            </Dialog>
          </Fragment>
        )}
      </Fragment>
    );
  }
}

export default compose(
  withStyles(styles, { withTheme: true })
  // connect(mapStateToProps, { predictScore })
)(PredictProcess);
