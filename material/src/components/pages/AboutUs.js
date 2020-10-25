import React, { Component, Fragment } from "react";
import { Box } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/typography";
import InstagramIcon from "@material-ui/icons/Instagram";
import TelegramIcon from "@material-ui/icons/Telegram";
import TwitterIcon from "@material-ui/icons/Twitter";
import EmailIcon from "@material-ui/icons/Email";
import PhoneIcon from "@material-ui/icons/Phone";
import GitHubIcon from "@material-ui/icons/GitHub";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import Link from "@material-ui/core/Link";

export class AboutUs extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div
        className="container"
        style={{
          height: "100%",
          maxWidth: "100%",
          //   display: "flex",
          //   flexDirection: "column",
          //   justifyContent: "flex-start",
          //   alignItems: "flex-start",
        }}
      >
        <div className="row" style={{ width: "100%", height: "100px" }}></div>
        <Typography variant="h4" style={{ marginBottom: "50px" }}>
          About Us
        </Typography>
        <div
          className="row align-items-center"
          style={{
            width: "100%",
            display: "flex",
          }}
        >
          <div
            className="col-sm-12 col-md-12"
            style={{
              display: "flex",
              flex: 1,
              width: "100%",
              flexDirection: "row",
              justifyContent: "space-around",
              flexWrap: "wrap",
              alignItems: "flex-start",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                marginBottom: "50px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  right: 15,
                  alignItems: "center",
                  position: "relative",
                  flex: 1,
                }}
              >
                <Avatar
                  className={classes.avatarLarge}
                  alt="Mohammad Hossein Amini"
                  src="/static/images/avatar/2.jpeg"
                />
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "center",
                  flex: 9,
                }}
              >
                <Typography variant="body1">Mohammad Hossein Amini</Typography>
                <Typography variant="caption">
                  Electrical Enginnering Master student at Amirkbir University
                </Typography>
                <Typography variant="body2">
                  Artificial Intelligence Specialist
                </Typography>
                <Typography variant="body2">
                  Designed and Trained the AI Prediction System
                </Typography>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: "200px",
                    flexWrap: "wrap",
                    marginTop: "10px",
                  }}
                >
                  <Link
                    href="https://telegram.me/mhosseinamini"
                    target="_blank"
                  >
                    <TelegramIcon />
                  </Link>
                  <Link href="tel:+989017701517" target="_blank">
                    <PhoneIcon />
                  </Link>
                  <Link
                    href="https://www.instagram.com/mhosseinamini"
                    target="_blank"
                  >
                    <InstagramIcon />
                  </Link>
                  <Link
                    href="https://www.linkedin.com/in/mohammad-hossein-amini-415402158"
                    target="_blank"
                  >
                    <LinkedInIcon />
                  </Link>
                  <Link href="mailto:mhamini@aut.ac.ir" target="_blank">
                    <EmailIcon />
                  </Link>
                  <Link href="https://github.com/M-H-Amini" target="_blank">
                    <GitHubIcon />
                  </Link>
                </div>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  right: 15,
                  alignItems: "center",
                  position: "relative",
                  flex: 1,
                }}
              >
                <Avatar
                  className={classes.avatarLarge}
                  alt="Mohammad Ali Ghorbani"
                  src="/static/images/avatar/1.jpg"
                />
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "center",
                  flex: 9,
                }}
              >
                <Typography variant="body1">Mohammad Ali Ghorbani</Typography>
                <Typography variant="caption">
                  Electrical Enginnering student at Amirkabir University
                </Typography>
                <Typography variant="body2">FullStack Web Developer</Typography>
                <Typography variant="body2">
                  Developed this webApplication
                </Typography>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: "230px",
                    flexWrap: "wrap",
                    marginTop: "10px",
                  }}
                >
                  <Link href="https://telegram.me/zuuuuuuuk" target="_blank">
                    <TelegramIcon />
                  </Link>
                  <Link href="tel:+989120714783" target="_blank">
                    <PhoneIcon />
                  </Link>
                  <Link
                    href="https://www.instagram.com/mohammadali__ghorbani/"
                    target="_blank"
                  >
                    <InstagramIcon />
                  </Link>
                  <Link
                    href="https://www.linkedin.com/in/mohammad-alighorbani-43236a160/"
                    target="_blank"
                  >
                    <LinkedInIcon />
                  </Link>
                  <Link href="https://twitter.com/MA_ghorbani" target="_blank">
                    <TwitterIcon />
                  </Link>
                  <Link href="mailto:maghorbani@aut.ac.ir" target="_blank">
                    <EmailIcon />
                  </Link>
                  <Link href="https://github.com/maghorbani" target="_blank">
                    <GitHubIcon />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-2 col-md-2"></div>
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
  avatarLarge: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  //   main: {},
});

export default withStyles(styles)(AboutUs);
