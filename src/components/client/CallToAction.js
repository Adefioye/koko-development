import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/styles";
import Button from "@material-ui/core/Button";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { Link } from "react-router-dom";

import background from "../../assets/background.jpg";
import mobileBackground from "../../assets/mobileBackground.jpg";

const useStyles = makeStyles((theme) => ({
  learnButton: {
    ...theme.typography.learnButton,
    fontSize: "0.7em",
    height: 35,
    padding: 5,
  },
  learnMoreText: {
    marginRight: "0.5em",
  },
  learnMoreArrowIcon: {
    fontSize: "1.5em",
  },
  background: {
    backgroundImage: `url(${background})`,
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100%",
    width: "100%",
    [theme.breakpoints.down("md")]: {
      backgroundImage: `url(${mobileBackground})`,
      backgroundAttachment: "inherit",
    },
  },
  estimateButton: {
    ...theme.typography.estimate,
    width: 145,
    height: 45,
    backgroundColor: theme.palette.common.orange,
    borderRadius: 50,
    marginRight: "5em",
    marginLeft: "2em",
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
    [theme.breakpoints.down("sm")]: {
      marginLeft: 0,
      marginRight: 0,
      marginTop: "2em",
    },
  },
}));

export default function CallToAction({ setValue, setSelectedIndex }) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Grid
      container
      style={{ height: "50em" }}
      alignItems="center"
      className={classes.background}
      justifyContent={matchesSM ? "center" : "space-between"}
      direction={matchesSM ? "column" : "row"}
    >
      <Grid item style={{ marginLeft: matchesSM ? 0 : "5em" }}>
        <Grid
          container
          style={{ textAlign: matchesSM ? "center" : null }}
          direction="column"
        >
          <Grid item>
            <Typography variant="h2">
              Simple Software.
              <br />
              Revolutionary Results
            </Typography>
            <Typography
              variant="subtitle2"
              style={{ color: "white", fontSize: "1.25rem" }}
            >
              Take advantage of the 21st Century.
            </Typography>
            <Grid
              container
              item
              style={{ justifyContent: matchesSM ? "center" : "inherit" }}
            >
              <Button
                component={Link}
                to="/revolution"
                variant="outlined"
                className={classes.learnButton}
                onClick={() => {
                  setValue(2);
                }}
              >
                <span className={classes.learnMoreText}>Learn More</span>{" "}
                <ArrowRightAltIcon className={classes.learnMoreArrowIcon} />{" "}
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Button
          component={Link}
          to="/estimate"
          variant="contained"
          color="secondary"
          className={classes.estimateButton}
          onClick={() => {
            setValue(false);
          }}
        >
          Free Estimate
        </Button>
      </Grid>
    </Grid>
  );
}
