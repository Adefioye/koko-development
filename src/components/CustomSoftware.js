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

import lightbulb from "../assets/bulb.svg";
import cash from "../assets/cash.svg";
import stopwatch from "../assets/stopwatch.svg";
import root from "../assets/root.svg";
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

export default function CustomSoftware({ setValue, setSelectedIndex }) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Grid container direction="column">
      {/* Custom software development introduction*/}
      <Grid
        item
        container
        direction="row"
        style={{ marginTop: matchesMD ? "1em" : null }}
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
              to="/services"
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
              Custom Software Development
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              align={matchesMD ? "center" : "inherit"}
              paragraph
            >
              Whether we’re replacing old software or inventing new solutions,
              Arc Development is here to help your business tackle technology.
            </Typography>
            <Typography
              variant="body1"
              align={matchesMD ? "center" : "inherit"}
              paragraph
            >
              Using regular commercial software leaves you with a lot of stuff
              you don’t need, without some of the stuff you do need, and
              ultimately controls the way you work. Without using any software
              at all you risk falling behind competitors and missing out on huge
              savings from increased efficiency.
            </Typography>
            <Typography
              variant="body1"
              align={matchesMD ? "center" : "inherit"}
              paragraph
            >
              Our custom solutions are designed from the ground up with your
              needs, wants, and goals at the core. This collaborative process
              produces finely tuned software that is much more effective at
              improving your workflow and reducing costs than generalized
              options.
            </Typography>
            <Typography
              variant="body1"
              align={matchesMD ? "center" : "inherit"}
              paragraph
            >
              We create exactly what you what, exactly how you want it.
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
              to="/mobileApps"
              disableRipple
              className={classes.navigate}
            >
              <ArrowForwardIcon />
            </IconButton>
          </Grid>
        </Hidden>
      </Grid>
      {/* Section on BENEFIT of custom software development */}
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
            <Typography variant="h4">Save Energy</Typography>
          </Grid>
          <Grid item>
            <img src={lightbulb} alt="light bulb logo" />
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
            <Typography variant="h4">Save Time</Typography>
          </Grid>
          <Grid item>
            <img src={stopwatch} alt="light bulb logo" />
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
            <Typography variant="h4">Save Money</Typography>
          </Grid>
          <Grid item>
            <img src={cash} alt="light bulb logo" />
          </Grid>
        </Grid>
      </Grid>
      {/*Section on Digital documents and scale*/}
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
            <Typography variant="h4" align={matchesMD ? "center" : "inherit"}>
              Digital Documents & Data
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              align={matchesMD ? "center" : "inherit"}
              paragraph
            >
              Reduce Errors. Reduce Waste. Reduce Costs.
            </Typography>
            <Typography
              variant="body1"
              align={matchesMD ? "center" : "inherit"}
              paragraph
            >
              Billions are spent annually on the purchasing, printing, and
              distribution of paper. On top of the massive environmental impact
              this has, it causes harm to your bottom line as well.
            </Typography>
            <Typography
              variant="body1"
              align={matchesMD ? "center" : "inherit"}
              paragraph
            >
              By utilizing digital forms and documents you can remove these
              obsolete expenses, accelerate your communication, and help the
              Earth.
            </Typography>
          </Grid>
        </Grid>
        <Grid item container direction="column" style={{ maxWidth: "40em" }} md>
          <Grid item>
            <Typography variant="h4" align={matchesMD ? "center" : "right"}>
              Scale
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              align={matchesMD ? "center" : "right"}
              paragraph
            >
              Whether you’re a large brand, just getting started, or taking off
              right now, our application architecture ensures pain-free growth
              and reliability.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      {/*Section on Root cause Analysis*/}
      <Grid
        item
        container
        justifyContent="center"
        style={{ marginTop: "10em" }}
        direction="row"
        className={classes.rowContainer}
      >
        <Grid
          item
          container
          alignItems="center"
          direction="column"
          style={{ maxWidth: "40em" }}
        >
          <Grid item style={{ marginBottom: "2em" }}>
            <img
              src={root}
              width={matchesMD ? "300em" : "450em"}
              height={matchesMD ? "300em" : "450em"}
              alt="root cause analysis logo"
              align="center"
            />
          </Grid>
          <Grid item>
            <Typography variant="h4" align="center">
              Root-Cause Analysis
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="body1" align="center" paragraph>
              Many problems are merely symptoms of larger, underlying issues.
            </Typography>
            <Typography variant="body1" align="center" paragraph>
              We can help you thoroughly examine all areas of your business to
              develop a holistic plan for the most effective implementation of
              technology.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      {/*Section on Automation and User experience */}
      <Grid
        item
        container
        direction="row"
        style={{ marginTop: "10em" }}
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
            <Typography variant="h4" align={matchesMD ? "center" : "inherit"}>
              Automation
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              align={matchesMD ? "center" : "inherit"}
              paragraph
            >
              Why waste time when you don’t have to?
            </Typography>
            <Typography
              variant="body1"
              align={matchesMD ? "center" : "inherit"}
              paragraph
            >
              We can help you identify processes with time or event based
              actions which can now easily be automated.
            </Typography>
            <Typography
              variant="body1"
              align={matchesMD ? "center" : "inherit"}
              paragraph
            >
              Increasing efficiency increases profits, leaving you more time to
              focus on your business, not busywork.
            </Typography>
          </Grid>
        </Grid>
        <Grid item container direction="column" style={{ maxWidth: "40em" }} md>
          <Grid item>
            <Typography variant="h4" align={matchesMD ? "center" : "right"}>
              User Experience Design
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              align={matchesMD ? "center" : "right"}
              paragraph
            >
              A good design that isn’t usable isn’t a good design.
            </Typography>
            <Typography
              variant="body1"
              align={matchesMD ? "center" : "right"}
              paragraph
            >
              So why are so many pieces of software complicated, confusing, and
              frustrating?
            </Typography>
            <Typography
              variant="body1"
              align={matchesMD ? "center" : "right"}
              paragraph
            >
              By prioritizing users and the real ways they interact with
              technology we’re able to develop unique, personable experiences
              that solve problems rather than create new ones.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item style={{ marginTop: "10em" }}>
        <CallToAction setValue={setValue} setSelectedIndex={setSelectedIndex} />
      </Grid>
    </Grid>
  );
}
