import React from "react";
import { Link } from "react-router-dom";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import ArrowBack from "@material-ui/icons/ArrowBack";
import Hidden from "@material-ui/core/Hidden";

import swissKnife from "../assets/swissKnife.svg";
import extendAccess from "../assets/extendAccess.svg";
import increaseEngagement from "../assets/increaseEngagement.svg";
import CallToAction from "./client/CallToAction";

const useStyles = makeStyles((theme) => ({
  rowContainer: {
    paddingLeft: "5em",
    paddingRight: "5em",
    [theme.breakpoints.down("md")]: {
      paddingLeft: "1em",
      paddingRight: "1em",
    },
  },
  navigate: {
    ...theme.typography.navigateArrow,
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  heading: {
    maxWidth: "40em",
  },
  arrowContainer: {
    marginTop: "0.3em",
  },
}));

export default function MobileApps({ setValue, setSelectedIndex }) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Grid container direction="column">
      {/* Custom software development introduction*/}
      <Grid
        item
        container
        direction="row"
        style={{ marginTop: matchesMD ? "1em" : null, marginBottom: "10em" }}
        className={classes.rowContainer}
        justifyContent="space-between"
      >
        <Hidden mdDown>
          <Grid item className={classes.arrowContainer}>
            {" "}
            {/*Backward Arrow*/}
            <IconButton
              onClick={() => {
                setSelectedIndex(0);
              }}
              component={Link}
              to="/customSoftware"
              disableRipple
              className={classes.navigate}
            >
              <ArrowBack />
            </IconButton>
          </Grid>
        </Hidden>
        <Grid item container direction="column" className={classes.heading}>
          <Grid item>
            <Typography variant="h2" align={matchesMD ? "center" : "inherit"}>
              Mobile App Development
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              align={matchesMD ? "center" : "inherit"}
              paragraph
            >
              Mobile apps allow you to take your tools on the go.
            </Typography>
            <Typography
              variant="body1"
              align={matchesMD ? "center" : "inherit"}
              paragraph
            >
              Whether you want an app for your customers, employees, or
              yourself, we can build cross-platform native solutions for any
              part of your business process. This opens you up to a whole new
              world of possibilities by taking advantage of phone features like
              the camera, GPS, push notifications, and more.
            </Typography>
            <Typography
              variant="body1"
              align={matchesMD ? "center" : "inherit"}
              paragraph
            >
              Convenience. Connection.
            </Typography>
          </Grid>
        </Grid>
        <Hidden mdDown>
          <Grid item className={classes.arrowContainer}>
            {" "}
            {/*Forward Arrow*/}
            <IconButton
              onClick={() => {
                setSelectedIndex(2);
              }}
              component={Link}
              to="/websites"
              disableRipple
              className={classes.navigate}
            >
              <ArrowForwardIcon />
            </IconButton>
          </Grid>
        </Hidden>
      </Grid>
      {/*Integration and integration platform support*/}
      <Grid
        item
        container
        direction="row"
        justifyContent="space-between"
        className={classes.rowContainer}
      >
        <Grid
          item
          container
          direction="column"
          style={{ maxWidth: "40em", marginBottom: matchesMD ? "3em" : null }}
          md
        >
          <Grid item>
            <Typography
              gutterBottom
              variant="h4"
              align={matchesMD ? "center" : "inherit"}
            >
              Integration
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              align={matchesMD ? "center" : "inherit"}
              paragraph
            >
              Our technology enables an innate interconnection between web and
              mobile applications, putting everything you need right in one
              convenient place.
            </Typography>
            <Typography
              variant="body1"
              align={matchesMD ? "center" : "inherit"}
              paragraph
            >
              This allows you to extend your reach, reinvent interactions, and
              develop a stronger relationship with your users than ever before.
            </Typography>
          </Grid>
        </Grid>
        <Grid item container direction="column" style={{ maxWidth: "40em" }} md>
          <Grid item>
            <Typography
              gutterBottom
              variant="h4"
              align={matchesMD ? "center" : "right"}
            >
              Simultaneous Platform Support
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              align={matchesMD ? "center" : "right"}
              paragraph
            >
              Our cutting-edge development process allows us to create apps for
              iPhone, Android, and tablets — all at the same time.
            </Typography>
            <Typography
              variant="body1"
              align={matchesMD ? "center" : "right"}
              paragraph
            >
              This significantly reduces costs and creates a more unified brand
              experience across all devices.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      {/*Section on BENEFITS of mobile app services*/}
      <Grid
        item
        container
        direction="row"
        justifyContent="center"
        style={{ marginTop: "10em", marginBottom: "10em" }}
        className={classes.rowContainer}
      >
        <Grid
          item
          container
          direction="column"
          style={{ maxWidth: "40em" }}
          alignItems="center"
          md
        >
          <Grid item>
            <Typography align="center" variant="h4">
              Extend Functionality
            </Typography>
          </Grid>
          <Grid item>
            <img
              src={swissKnife}
              alt="swiss knife logo"
              style={{
                maxWidth: matchesSM ? "18em" : "28em",
              }}
            />
          </Grid>
        </Grid>
        <Grid
          item
          container
          direction="column"
          style={{
            maxWidth: "40em",
            marginTop: matchesMD ? "5em" : null,
            marginBottom: matchesMD ? "5em" : null,
          }}
          alignItems="center"
          md
        >
          <Grid item>
            <Typography align="center" variant="h4">
              Extend Access
            </Typography>
          </Grid>
          <Grid item>
            <img
              src={extendAccess}
              alt="extend access logo"
              style={{ maxWidth: matchesSM ? "18em" : "28em" }}
            />
          </Grid>
        </Grid>
        <Grid
          item
          container
          direction="column"
          style={{ maxWidth: "40em" }}
          alignItems="center"
          md
        >
          <Grid item>
            <Typography align="center" variant="h4">
              Increase Engagement
            </Typography>
          </Grid>
          <Grid item>
            <img
              src={increaseEngagement}
              alt="increase engagement logo"
              style={{ maxWidth: matchesSM ? "18em" : "28em" }}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <CallToAction setValue={setValue} setSelectedIndex={setSelectedIndex} />
      </Grid>
    </Grid>
  );
}
