import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { compose } from "redux";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";

const styles = (theme) => ({
  root: {
    marginLeft: "20px",
    paddingTop: "100px",
  },
  demo: {
    display: "flex",
    height: "100%",
    flexDirection: "column",
    alignItems: "flex-start",
  },
});

export class GitRepos extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.demo}>
          <Typography variant="h4">GitRepos</Typography>
          <List>
            <ListItem>
              <ListItemText
                primary="MHCovid python module, Developed by Mohammad Hossein Amini"
                secondary={
                  <a
                    href="https://github.com/M-H-Amini/MHCovid"
                    target="_blank"
                  >
                    GitHub Link
                  </a>
                }
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="WebApplication server and front side source, Developed by Mohammad Ali Ghorbani"
                secondary={
                  <a
                    href="https://github.com/maghorbani/mhcovidWebsite"
                    target="_blank"
                  >
                    GitHub Link
                  </a>
                }
              />
            </ListItem>
          </List>
        </div>
      </div>
    );
  }
}

export default compose(withStyles(styles, {}))(GitRepos);
