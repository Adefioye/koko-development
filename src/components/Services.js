import React from "react";
import Grid from "@material-ui/core/Grid";
import makeStyles from "@material-ui/styles/makeStyles";
import useTheme from "@material-ui/core/styles/useTheme";
import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Button from "@material-ui/core/Button";

import customSoftwareIcon from "../assets/Custom Software Icon.svg";
import mobileAppIcon from "../assets/mobileIcon.svg";
import websiteIcon from "../assets/websiteIcon.svg";

const useStyles = makeStyles((theme) => ({
  serviceContainer: {
    marginTop: "6em",
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
      padding: 20,
    },
  },
  learnButton: {
    ...theme.typography.learnButton,
    fontSize: "0.7em",
    height: 35,
    padding: 5,
  },
  specialText: {
    fontFamily: "Pacifico",
    color: theme.palette.common.orange,
  },
  subtitle: {
    marginBottom: "1em",
  },
  learnMoreText: {
    marginRight: "0.5em",
  },
  learnMoreArrowIcon: {
    fontSize: "1.5em",
  },
  imageIcon: {
    marginLeft: "2em",
    [theme.breakpoints.down("sm")]: {
      marginLeft: 0,
      marginTop: "2em",
    },
  },
}));

export default function Services({ setValue, setSelectedIndex }) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Grid container direction="column">
      <Grid
        item
        style={{
          marginTop: matchesSM ? "2em" : null,
          marginLeft: matchesSM ? null : "5em",
          textAlign: matchesSM ? "center" : null,
        }}
      >
        <Typography variant="h2">Services</Typography>
      </Grid>
      <Grid item>
        {" "}
        {/* Mobile app block */}
        <Grid
          container
          justifyContent={matchesSM ? "center" : "flex-end"}
          className={classes.serviceContainer}
          direction="row"
          style={{ marginTop: matchesSM ? 0 : "4em" }}
        >
          <Grid item style={{ width: matchesSM ? undefined : "35em" }}>
            <Typography variant="h4">Mobile App Development</Typography>
            <Typography variant="subtitle1" className={classes.subtitle}>
              Extend Functionality. Extend Access. Increase Engagement.
            </Typography>
            <Typography variant="subtitle1" className={classes.subtitle}>
              Integrate your web experience or create a standalone app with
              either mobile platform
            </Typography>
            <Button
              component={Link}
              to="/mobileApps"
              variant="outlined"
              className={classes.learnButton}
              onClick={() => {
                setValue(1);
                setSelectedIndex(2);
              }}
            >
              <span className={classes.learnMoreText}>Learn More</span>{" "}
              <ArrowRightAltIcon className={classes.learnMoreArrowIcon} />{" "}
            </Button>
          </Grid>
          <Grid item style={{ marginRight: matchesSM ? 0 : "5em" }}>
            <img
              className={classes.imageIcon}
              src={mobileAppIcon}
              alt="Mobile app icon"
              width="250em"
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        {" "}
        {/* Custom software block */}
        <Grid
          container
          style={{ marginLeft: matchesSM ? 0 : "5em" }}
          justifyContent={matchesSM ? "center" : null}
          className={classes.serviceContainer}
          direction="row"
        >
          <Grid item>
            <Typography variant="h4">Custom Software Development</Typography>
            <Typography variant="subtitle1" className={classes.subtitle}>
              Save Energy. Save Time. Save Money.
            </Typography>
            <Typography variant="subtitle1" className={classes.subtitle}>
              Complete digital solutions, from investigation to{" "}
              <span className={classes.specialText}>celebration</span>
            </Typography>
            <Button
              component={Link}
              to="/customSoftware"
              variant="outlined"
              className={classes.learnButton}
              onClick={() => {
                setValue(1);
                setSelectedIndex(1);
              }}
            >
              <span className={classes.learnMoreText}>Learn More</span>{" "}
              <ArrowRightAltIcon className={classes.learnMoreArrowIcon} />{" "}
            </Button>
          </Grid>
          <Grid item>
            <img
              className={classes.imageIcon}
              src={customSoftwareIcon}
              alt="custom software icon"
              width="200em"
            />
          </Grid>
        </Grid>
      </Grid>

      <Grid item>
        {" "}
        {/* Website development block */}
        <Grid
          container
          justifyContent={matchesSM ? "center" : "flex-end"}
          className={classes.serviceContainer}
          direction="row"
          style={{ marginBottom: "4em" }}
        >
          <Grid item style={{ width: matchesSM ? undefined : "35em" }}>
            <Typography variant="h4">Website Development</Typography>
            <Typography variant="subtitle1" className={classes.subtitle}>
              Reach more. Discover more. Sell more.
            </Typography>
            <Typography variant="subtitle1" className={classes.subtitle}>
              Optimized for search engines. built for speed.
            </Typography>
            <Button
              component={Link}
              to="/websites"
              variant="outlined"
              className={classes.learnButton}
              onClick={() => {
                setValue(1);
                setSelectedIndex(3);
              }}
            >
              <span className={classes.learnMoreText}>Learn More</span>{" "}
              <ArrowRightAltIcon className={classes.learnMoreArrowIcon} />{" "}
            </Button>
          </Grid>
          <Grid item style={{ marginRight: matchesSM ? 0 : "5em" }}>
            <img
              className={classes.imageIcon}
              src={websiteIcon}
              alt="website service icon"
              width="250em"
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}


