import React from "react";
import makeStyles from "@material-ui/styles/makeStyles";
import Button from "@material-ui/core/Button";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  aboutContainer: {
    marginTop: "3em",
    marginBottom: "2em",
    [theme.breakpoints.down("sm")]: {
        marginTop: "2em",
        marginLeft: "auto",
        marginRight: "auto",
    }

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
    }
  },
  learnMoreButton: {
    width: 145,
    height: 45,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: theme.palette.common.blue,
    textTransform: "none",
    fontFamily: "Roboto",
    fontWeight: "bold",
    fontSize: "0.9em",
    color: theme.palette.common.blue,
    [theme.breakpoints.down("sm")]: {
        width: 140,
        fontSize: "0.8em"
    }
  },
  learnMoreText: {
    marginRight: "0.5em",
  },
  learnMoreArrowIcon: {
    fontSize: "1.5em",
  },
}));

function LandingPage() {
  const classes = useStyles();

  return (
    <Grid container alignItems="center" direction="column">
      <Grid item>
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
                <Button variant="outlined" className={classes.learnMoreButton}>
                  <span className={classes.learnMoreText}>Learn More</span>{" "}
                  <ArrowRightAltIcon className={classes.learnMoreArrowIcon} />{" "}
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Typography>Shola is a kickAss</Typography>
      </Grid>
    </Grid>
  );
}

export default LandingPage;
