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

import analytics from "../assets/analytics.svg";
import seo from "../assets/seo.svg";
import outreach from "../assets/outreach.svg";
import ecommerce from "../assets/ecommerce.svg";
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

export default function Websites({ setValue, setSelectedIndex }) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Grid container direction="column">
      {/* Website development introduction*/}
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
                setSelectedIndex(2);
              }}
              component={Link}
              to="/mobileApps"
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
              Website Development
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              align={matchesMD ? "center" : "inherit"}
              paragraph
            >
              Having a website is a necessity in today’s business world. They
              give you one central, public location to let people know who you
              are, what you do, and why you’re the best at it.
            </Typography>
            <Typography
              variant="body1"
              align={matchesMD ? "center" : "inherit"}
              paragraph
            >
              From simply having your hours posted to having a full fledged
              online store, making yourself as accessible as possible to users
              online drives growth and enables you to reach new customers.
            </Typography>
          </Grid>
        </Grid>
        <Hidden mdDown>
          <Grid item className={classes.arrowContainer}>
            {" "}
            {/*Forward Arrow*/}
            <IconButton
              onClick={() => {
                setSelectedIndex(0);
              }}
              component={Link}
              to="/services"
              disableRipple
              className={classes.navigate}
            >
              <ArrowForwardIcon />
            </IconButton>
          </Grid>
        </Hidden>
      </Grid>
      {/* Section on Analytics*/}
      <Grid
        item
        container
        alignItems="center"
        direction={matchesSM ? "column" : "row"}
        justifyContent={matchesSM ? "center" : null}
        className={classes.rowContainer}
      >
        <Grid item>
          <Grid container direction="column">
            <Grid item style={{ marginLeft: "2.8em" }}>
              <Typography
                align={matchesSM ? "center" : "inherit"}
                gutterButtom
                variant="h4"
              >
                Analytics
              </Typography>
            </Grid>
            <Grid item style={{ margin: matchesSM ? "0 auto" : null }}>
              <img src={analytics} alt="chart and magnifying glasses logo" />
            </Grid>
          </Grid>
        </Grid>
        <Grid item style={{ marginLeft: "1em", maxWidth: "25em" }}>
          <Typography align={matchesSM ? "center" : "inherit"} variant="body1">
            Knowledge is power, and data is 21st Century gold. Analyzing this
            data can reveal hidden patterns and trends in your business,
            empowering you to make smarter decisions with measurable effects.
          </Typography>
        </Grid>
      </Grid>
      {/* Section on Ecommerce */}
      <Grid
        item
        container
        alignItems="center"
        direction={matchesSM ? "column" : "row"}
        className={classes.rowContainer}
        justifyContent={matchesSM ? "center" : "flex-end"}
        style={{ marginTop: "10em", marginBottom: "10em" }}
      >
        <Grid item>
          <Grid container direction="column">
            <Grid item>
              <Typography
                align={matchesSM ? "center" : "inherit"}
                gutterButtom
                variant="h4"
              >
                E-Commerce
              </Typography>
            </Grid>
            <Grid item style={{ margin: matchesSM ? "0 auto" : null }}>
              <img src={ecommerce} alt="ecommerce logo" />
            </Grid>
          </Grid>
        </Grid>
        <Grid item style={{ marginLeft: "1em", maxWidth: "25em" }}>
          <Typography
            align={matchesSM ? "center" : "inherit"}
            variant="body1"
            paragraph
          >
            It’s no secret that people like to shop online.
          </Typography>
          <Typography
            align={matchesSM ? "center" : "inherit"}
            variant="body1"
            paragraph
          >
            It’s no secret that people like to shop online.
          </Typography>
        </Grid>
      </Grid>
      {/* Section on Outreach */}
      <Grid
        item
        container
        direction={matchesSM ? "column" : "row"}
        alignItems="center"
        justifyContent={matchesSM ? "center" : null}
        className={classes.rowContainer}
      >
        <Grid item>
          <Grid container direction="column">
            <Grid item style={{ marginLeft: "2.8em" }}>
              <Typography
                align={matchesSM ? "center" : "inherit"}
                gutterButtom
                variant="h4"
                style={{ marginLeft: "-1em" }}
              >
                Outreach
              </Typography>
            </Grid>
            <Grid item style={{ margin: matchesSM ? "0 auto" : null }}>
              <img src={outreach} alt="sound system logo" />
            </Grid>
          </Grid>
        </Grid>
        <Grid item style={{ maxWidth: "25em", marginLeft: "1em" }}>
          <Typography align={matchesSM ? "center" : "inherit"} variant="body1">
            Draw people in with a dazzling website. Showing off your products
            online is a great way to help customers decide what’s right for them
            before visiting in person.
          </Typography>
        </Grid>
      </Grid>
      {/* Section on Search Engine Optimization */}
      <Grid
        item
        container
        alignItems="center"
        direction={matchesSM ? "column" : "row"}
        className={classes.rowContainer}
        justifyContent={matchesSM ? "center" : "flex-end"}
        style={{ marginTop: "10em", marginBottom: "10em" }}
      >
        <Grid item>
          <Grid container direction="column">
            <Grid item>
              <Typography
                align={matchesSM ? "center" : "inherit"}
                gutterButtom
                variant="h4"
              >
                Search Engine Optimization
              </Typography>
            </Grid>
            <Grid item style={{ margin: matchesSM ? "0 auto" : null }}>
              <img src={seo} alt="seo logo" />
            </Grid>
          </Grid>
        </Grid>
        <Grid item style={{ maxWidth: "25em", padding: "1em" }}>
          <Typography
            align={matchesSM ? "center" : "inherit"}
            variant="body1"
            paragraph
          >
            How often have you ever been to the second page of Google results?
          </Typography>
          <Typography
            align={matchesSM ? "center" : "inherit"}
            variant="body1"
            paragraph
          >
            If you’re like us, probably never
          </Typography>
          <Typography
            align={matchesSM ? "center" : "inherit"}
            variant="body1"
            paragraph
          >
            Customers don’t go there either, so we make sure your website is
          </Typography>
        </Grid>
      </Grid>
      <Grid item>
        <CallToAction setValue={setValue} setSelectedIndex={setSelectedIndex} />
      </Grid>
    </Grid>
  );
}
