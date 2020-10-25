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

export class Acknowledgement extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.demo}>
          <Typography variant="h4">Acknowledgement</Typography>
          <List>
            <ListItem>
              <ListItemText
                primary="1- Dr.Menhaj, Dr.Talebi and Dr.Sharifi for their
                supports..."
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="2- Dr.Mirahmadi, Dr.Javadi, Dr.Babakhani for their medical
                advices..."
              />
            </ListItem>
            <ListItem>
              <ListItemText primary="3- Dr.Ashnaee, Mr.Alipur for their supports..." />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="4- Those who
                gather datasets of COVID-19 chest X-ray on github and kaggle"
                secondary={
                  <p style={{ marginLeft: "20px" }}>
                    <a
                      target="_blank"
                      href="https://github.com/ieee8023/covid-chestxray-dataset"
                    >
                      github: covid-chestxray-dataset
                    </a>
                    <br />
                    <a
                      target="_blank"
                      href="https://www.kaggle.com/praveengovi/coronahack-chest-xraydataset"
                    >
                      kaggle: coronahack-chest-xraydataset
                    </a>
                  </p>
                }
              />
            </ListItem>
          </List>
        </div>

        {/* Special thanks to... 1- Dr.Menhaj, Dr.Talebi and Dr.Sharifi for their
        supports... 2- Dr.Mirahmadi, Dr.Javadi, Dr.Babakhani for their medical
        advices... 3- Dr.Ashnaee, Mr.Alipur for their supports... 4- Those who
        gather datasets of COVID-19 chest X-ray on github and kaggle
        https://github.com/ieee8023/covid-chestxray-dataset
        https://www.kaggle.com/praveengovi/coronahack-chest-xraydataset */}
      </div>
    );
  }
}

export default compose(withStyles(styles, {}))(Acknowledgement);
