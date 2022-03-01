import React from "react";
import makeStyles from "@material-ui/styles/makeStyles";
import Button from "@material-ui/core/Button";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import useTheme from "@material-ui/styles/useTheme";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import customSoftwareIcon from "../../assets/Custom Software Icon.svg";
import mobileAppIcon from "../../assets/mobileIcon.svg";

const useStyles = makeStyles((theme) => ({
  aboutContainer: {
    marginTop: "3em",
    marginBottom: "2em",
    [theme.breakpoints.down("sm")]: {
      marginTop: "2em",
      marginLeft: "auto",
      marginRight: "auto",
    },
  },
  buttonContainer: {
    marginTop: "1.5em",
  },
  estimateButton: {
    ...theme.typography.estimate,
    width: 145,
    height: 45,
    backgroundColor: theme.palette.common.orange,
    borderRadius: 50,
    marginRight: "2.5rem",
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
    [theme.breakpoints.down("sm")]: {
      width: 140,
    },
  },
  learnButtonAbout: {
    ...theme.typography.learnButton,
    width: 145,
    height: 45,
    fontSize: "0.9em",
    [theme.breakpoints.down("sm")]: {
      width: 140,
      fontSize: "0.8em",
    },
  },
  learnMoreText: {
    marginRight: "0.5em",
  },
  learnMoreArrowIcon: {
    fontSize: "1.5em",
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
  imageIcon: {
    marginLeft: "2em",
    [theme.breakpoints.down("sm")]: {
      marginLeft: 0,
      marginTop: "2em",
    },
  },
  serviceContainer: {
    marginTop: "6em",
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
      padding: 25,
    },
  },
}));

function LandingPage() {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Grid container direction="column">
      <Grid item>
        {" "}
        {/*Page Description block*/}
        <Grid
          container
          className={classes.aboutContainer}
          alignItems="center"
          direction="column"
        >
          <Grid item>
            <Typography variant="h2" align="center">
              Bringing West Coast Technology
              <br />
              to the Midwest
            </Typography>
          </Grid>
          <Grid item>
            <Grid container className={classes.buttonContainer}>
              <Grid item>
                <Button variant="contained" className={classes.estimateButton}>
                  Free Estimate
                </Button>
              </Grid>
              <Grid item>
                <Button variant="outlined" className={classes.learnButtonAbout}>
                  <span className={classes.learnMoreText}>Learn More</span>{" "}
                  <ArrowRightAltIcon className={classes.learnMoreArrowIcon} />{" "}
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        {" "}
        {/* Custom software block */}
        <Grid
          container
          style={{ marginLeft: matchesSM ? 0 : "5em" }}
          justifyContent={matchesSM ? "center" : "undefined"}
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
            <Button variant="outlined" className={classes.learnButton}>
              <span className={classes.learnMoreText}>Learn More</span>{" "}
              <ArrowRightAltIcon className={classes.learnMoreArrowIcon} />{" "}
            </Button>
          </Grid>
          <Grid item>
            <img
              className={classes.imageIcon}
              src={customSoftwareIcon}
              alt="custom software icon"
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        {" "}
        {/* Mobile app block */}
        <Grid
          container
          justifyContent={matchesSM ? "center" : "flex-end"}
          className={classes.serviceContainer}
          direction="row"
        >
          <Grid item>
            <Typography variant="h4">Mobile App Development</Typography>
            <Typography variant="subtitle1" className={classes.subtitle}>
              Extend Functionality. Extend Access. Increase Engagement.
            </Typography>
            <Typography variant="subtitle1" className={classes.subtitle}>
              Integrate your web experience or create a standalone app with
              either mobile platform
            </Typography>
            <Button variant="outlined" className={classes.learnButton}>
              <span className={classes.learnMoreText}>Learn More</span>{" "}
              <ArrowRightAltIcon className={classes.learnMoreArrowIcon} />{" "}
            </Button>
          </Grid>
          <Grid item style={{ marginRight: matchesSM ? 0 : "5em" }}>
            <img
              className={classes.imageIcon}
              src={mobileAppIcon}
              alt="Mobile app icon"
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
          justifyContent={matchesSM ? "center" : "undefined"}
          className={classes.serviceContainer}
          direction="row"
        >
          <Grid item>
            <Typography variant="h4">Website Development</Typography>
            <Typography variant="subtitle1" className={classes.subtitle}>
              Reach more. Discover more. Sell more.
            </Typography>
            <Typography variant="subtitle1" className={classes.subtitle}>
             Optimized for search engines. built for speed.
            </Typography>
            <Button variant="outlined" className={classes.learnButton}>
              <span className={classes.learnMoreText}>Learn More</span>{" "}
              <ArrowRightAltIcon className={classes.learnMoreArrowIcon} />{" "}
            </Button>
          </Grid>
          <Grid item>
            <img
              className={classes.imageIcon}
              src={customSoftwareIcon}
              alt="custom software icon"
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default LandingPage;
