import React from "react";
import makeStyles from "@material-ui/styles/makeStyles";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import Hidden from "@material-ui/core/Hidden";

import footerAdornment from "../../assets/Footer Adornment.svg";
import facebook from "../../assets/facebook.svg";
import instagram from "../../assets/instagram.svg";
import twitter from "../../assets/twitter.svg";

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.common.blue,
    width: "100%",
    zIndex: 1302,
    position: "relative",
  },
  adornment: {
    width: "25em",
    verticalAlign: "bottom",
    [theme.breakpoints.down("md")]: {
      width: "21em",
    },
    [theme.breakpoints.down("xs")]: {
      width: "15em",
    },
  },
  mainContainer: {
    position: "absolute",
  },
  link: {
    color: "white",
    fontFamily: "Arial",
    fontSize: "0.75em",
    fontWeight: "bold",
    textDecoration: "none",
  },
  gridItem: {
    margin: "3em",
  },
  icon: {
    width: "4em",
    height: "4em",
    [theme.breakpoints.down("xs")]: {
      width: "2.5em",
      height: "2.5em",
    },
  },
  socialContainer: {
    position: "absolute",
    marginTop: "-6em",
    right: "1.5em",
    [theme.breakpoints.down("xs")]: {
      right: "0.5em",
    },
  },
}));

function Footer(props) {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Hidden mdDown>
        <Grid
          container
          justifyContent="center"
          className={classes.mainContainer}
        >
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid
                item
                component={Link}
                to="/"
                className={classes.link}
                onClick={() => props.setValue(0)}
              >
                Home
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid
                item
                component={Link}
                to="/services"
                className={classes.link}
                onClick={() => {
                  props.setValue(1);
                  props.setSelectedIndex(0);
                }}
              >
                Services
              </Grid>
              <Grid
                item
                component={Link}
                to="/customSoftware"
                className={classes.link}
                onClick={() => {
                  props.setValue(1);
                  props.setSelectedIndex(1);
                }}
              >
                Custom Software Development
              </Grid>
              <Grid
                item
                component={Link}
                to="/mobileApps"
                className={classes.link}
                onClick={() => {
                  props.setValue(1);
                  props.setSelectedIndex(2);
                }}
              >
                Mobile App Development
              </Grid>
              <Grid
                item
                component={Link}
                to="/websites"
                className={classes.link}
                onClick={() => {
                  props.setValue(1);
                  props.setSelectedIndex(3);
                }}
              >
                Website Development
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid
                item
                component={Link}
                to="/revolution"
                className={classes.link}
                onClick={() => props.setValue(2)}
              >
                The revolution
              </Grid>
              <Grid
                item
                component={Link}
                to="/revolution"
                className={classes.link}
                onClick={() => props.setValue(2)}
              >
                Vision
              </Grid>
              <Grid
                item
                component={Link}
                to="/revolution"
                className={classes.link}
                onClick={() => props.setValue(2)}
              >
                Technology
              </Grid>
              <Grid
                item
                component={Link}
                to="/revolution"
                className={classes.link}
                onClick={() => props.setValue(2)}
              >
                Process
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid
                item
                component={Link}
                to="/about"
                className={classes.link}
                onClick={() => props.setValue(3)}
              >
                About Us
              </Grid>
              <Grid
                item
                component={Link}
                to="/about"
                className={classes.link}
                onClick={() => props.setValue(3)}
              >
                History
              </Grid>
              <Grid
                item
                component={Link}
                to="/about"
                className={classes.link}
                onClick={() => props.setValue(3)}
              >
                Team
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid
                item
                component={Link}
                to="/contact"
                className={classes.link}
                onClick={() => props.setValue(4)}
              >
                Contact Us
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Hidden>
      <img
        src={footerAdornment}
        alt="black decorative slash"
        className={classes.adornment}
      />
      <Grid
        container
        justifyContent="flex-end"
        className={classes.socialContainer}
        spacing={2}
      >
        <Grid
          component={"a"}
          rel="noopener noreferrer"
          target="_blank"
          href="https://www.facebook.com"
          item
        >
          <img src={facebook} alt="facebook logo" className={classes.icon} />
        </Grid>
        <Grid
          component={"a"}
          rel="noopener noreferrer"
          target="_blank"
          href="https://www.instagram.com"
          item
        >
          <img src={instagram} alt="instagram logo" className={classes.icon} />
        </Grid>
        <Grid
          component={"a"}
          rel="noopener noreferrer"
          target="_blank"
          href="https://www.twitter.com"
          item
        >
          <img src={twitter} alt="twitter logo" className={classes.icon} />
        </Grid>
      </Grid>
    </footer>
  );
}

export default Footer;
