import React from "react";
import makeStyles from "@material-ui/styles/makeStyles";
import Button from "@material-ui/core/Button";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import useTheme from "@material-ui/styles/useTheme";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { Link } from "react-router-dom";

import customSoftwareIcon from "../assets/Custom Software Icon.svg";
import mobileAppIcon from "../assets/mobileIcon.svg";
import websiteIcon from "../assets/websiteIcon.svg";
import revolutionBackground from "../assets/repeatingBackground.svg";
import infoBackground from "../assets/infoBackground.svg";
import CallToAction from "./client/CallToAction";

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
  revolutionBackground: {
    backgroundImage: `url(${revolutionBackground})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100%",
    width: "100%",
  },
  revolutionCard: {
    position: "absolute",
    boxShadow: theme.shadows[10],
    borderRadius: 15,
    padding: "7em",
    [theme.breakpoints.down("sm")]: {
      paddingTop: "5em",
      paddingBottom: "5em",
      paddingLeft: 0,
      paddingRight: 0,
      borderRadius: 0,
    },
  },
  infoBackground: {
    backgroundImage: `url(${infoBackground})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100%",
    width: "100%",
  },
}));

function LandingPage() {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

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
                <Button
                  component={Link}
                  to="/estimate"
                  variant="contained"
                  className={classes.estimateButton}
                >
                  Free Estimate
                </Button>
              </Grid>
              <Grid item>
                <Button
                  component={Link}
                  to="/revolution"
                  variant="outlined"
                  className={classes.learnButtonAbout}
                >
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
            <Button
              component={Link}
              to="/mobileApps"
              variant="outlined"
              className={classes.learnButton}
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
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        {" "}
        {/* Website development block */}
        <Grid
          container
          style={{ marginLeft: matchesSM ? 0 : "5em" }}
          justifyContent={matchesSM ? "center" : null}
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
            <Button
              component={Link}
              to="/websites"
              variant="outlined"
              className={classes.learnButton}
            >
              <span className={classes.learnMoreText}>Learn More</span>{" "}
              <ArrowRightAltIcon className={classes.learnMoreArrowIcon} />{" "}
            </Button>
          </Grid>
          <Grid item>
            <img
              className={classes.imageIcon}
              src={websiteIcon}
              alt="website service icon"
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item style={{ marginTop: "6em" }}>
        {" "}
        {/* Revolution block */}
        <Grid
          justifyContent="center"
          alignItems="center"
          style={{ height: "50em" }}
          item
          container
        >
          <Card className={classes.revolutionCard}>
            <CardContent>
              <Grid
                container
                style={{ textAlign: "center" }}
                direction="column"
              >
                <Grid item>
                  <Typography variant="h3" gutterBottom>
                    The Revolution
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="subtitle1">
                    Visionary insights coupled with cutting-edge technology is a
                    recipe for revolution
                  </Typography>
                  <Button
                    component={Link}
                    to="/revolution"
                    variant="outlined"
                    className={classes.learnButton}
                  >
                    <span className={classes.learnMoreText}>Learn More</span>{" "}
                    <ArrowRightAltIcon className={classes.learnMoreArrowIcon} />{" "}
                  </Button>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
          <div className={classes.revolutionBackground} />
        </Grid>
      </Grid>
      <Grid item>
        {" "}
        {/*Information block*/}
        <Grid
          container
          style={{ height: "50em" }}
          alignItems="center"
          direction="row"
        >
          <Grid
            container
            item
            style={{ position: "absolute", justifyContent: "space-between" }}
            direction={matchesSM ? "column" : "row"}
            spacing={matchesXS ? 10 : 0}
          >
            <Grid
              sm
              item
              style={{
                marginLeft: matchesXS ? 0 : matchesSM ? "2em" : "5em",
                textAlign: matchesXS ? "center" : "inherit",
              }}
            >
              <Grid container direction="column">
                <Typography variant="h2" style={{ color: "white" }}>
                  About Us
                </Typography>
                <Typography variant="subtitle2" style={{ color: "white" }}>
                  Let's get personal.
                </Typography>
                <Grid item>
                  <Button
                    component={Link}
                    to="/about"
                    style={{ borderColor: "white", color: "white" }}
                    variant="outlined"
                    className={classes.learnButton}
                  >
                    <span className={classes.learnMoreText}>Learn More</span>{" "}
                    <ArrowRightAltIcon className={classes.learnMoreArrowIcon} />{" "}
                  </Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid
              sm
              item
              style={{
                marginRight: matchesXS ? 0 : matchesSM ? "2em" : "5em",
                textAlign: matchesXS ? "center" : "right",
              }}
            >
              <Grid container direction="column">
                <Typography variant="h2" style={{ color: "white" }}>
                  Contact Us
                </Typography>
                <Typography variant="subtitle2" style={{ color: "white" }}>
                  Say hello!
                </Typography>
                <Grid item>
                  <Button
                    component={Link}
                    to="/contact"
                    style={{ borderColor: "white", color: "white" }}
                    variant="outlined"
                    className={classes.learnButton}
                  >
                    <span className={classes.learnMoreText}>Learn More</span>{" "}
                    <ArrowRightAltIcon className={classes.learnMoreArrowIcon} />{" "}
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          <div className={classes.infoBackground} />
        </Grid>
      </Grid>
      <Grid item>
        <CallToAction />
      </Grid>
    </Grid>
  );
}

export default LandingPage;
