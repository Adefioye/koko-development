import React, { useState } from "react";
import axios from "axios";
import Lottie from "react-lottie";
import { cloneDeep } from "lodash";
import { makeStyles, useTheme } from "@material-ui/core/styles";

import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import TextField from "@material-ui/core/TextField";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Hidden from "@material-ui/core/Hidden";
import Snackbar from "@material-ui/core/Snackbar";
import CircularProgress from "@material-ui/core/CircularProgress";

import check from "../assets/check.svg";
import send from "../assets/send.svg";
import software from "../assets/software.svg";
import mobile from "../assets/mobile.svg";
import website from "../assets/website.svg";
import backArrow from "../assets/backArrow.svg";
import backArrowDisabled from "../assets/backArrowDisabled.svg";
import forwardArrow from "../assets/forwardArrow.svg";
import forwardArrowDisabled from "../assets/forwardArrowDisabled.svg";
import camera from "../assets/camera.svg";
import upload from "../assets/upload.svg";
import person from "../assets/person.svg";
import persons from "../assets/persons.svg";
import info from "../assets/info.svg";
import bell from "../assets/bell.svg";
import people from "../assets/people.svg";
import usersIcon from "../assets/users.svg";
import iPhone from "../assets/iphone.svg";
import gps from "../assets/gps.svg";
import customized from "../assets/customized.svg";
import data from "../assets/data.svg";
import android from "../assets/android.svg";
import globe from "../assets/globe.svg";
import biometrics from "../assets/biometrics.svg";

const useStyles = makeStyles((theme) => ({
  icon: {
    width: "12em",
    height: "10em",
  },
  getEstimate: {
    ...theme.typography.estimate,
  },
}));

export default function Estimate() {
  const classes = useStyles();
  return (
    <Grid container direction="row">
      <Grid item container direction="column" lg>
        <Grid item style={{ marginLeft: "5em", marginTop: "7em" }}>
          <Typography variant="h2">Estimate</Typography>
        </Grid>
        <Grid
          item
          style={{ marginRight: "10em", maxWidth: "50em", marginTop: "7em" }}
        >
          <img src={mobile} width="100%" height="100%" alt="" />
        </Grid>
      </Grid>
      <Grid item container direction="column" lg>
        <Grid item>
          <Typography
            variant="h2"
            align="center"
            style={{
              fontWeight: 500,
              fontSize: "2.5rem",
              marginBottom: "2.5em",
              marginTop: "5em",
            }}
            gutterBottom
          >
            Which service are you interested in?
          </Typography>
        </Grid>
        <Grid
          item
          container
          justifyContent="center"
          style={{ marginBottom: "10em" }}
        >
          <Grid item container direction="column" md>
            <Grid item style={{ maxWidth: "12em", marginBottom: "2em" }}>
              <Typography variant="h6" align="center" gutterButtom>
                Custom Software Development
              </Typography>
            </Grid>
            <Grid item>
              <img
                src={software}
                alt="three floating screens"
                className={classes.icon}
              />
            </Grid>
          </Grid>
          <Grid item container direction="column" md>
            <Grid item style={{ maxWidth: "12em", marginBottom: "2em" }}>
              <Typography variant="h6" align="center" gutterButtom>
                Mobile App Development
              </Typography>
            </Grid>
            <Grid item>
              <img
                src={mobile}
                alt="phone and tablet outline"
                className={classes.icon}
              />
            </Grid>
          </Grid>
          <Grid item container direction="column" md>
            <Grid item style={{ maxWidth: "12em", marginBottom: "2em" }}>
              <Typography variant="h6" align="center" gutterBottom>
                Website Development
              </Typography>
            </Grid>
            <Grid item>
              <img
                src={website}
                alt="computer outline"
                className={classes.icon}
              />
            </Grid>
          </Grid>
          <Grid
            item
            container
            justifyContent="space-between"
            style={{ width: "15em", marginTop: "4em" }}
          >
            <Grid item>
              <img src={backArrow} alt="previous question" />
            </Grid>
            <Grid item>
              <img src={forwardArrow} alt="previous question" />
            </Grid>
          </Grid>
          <Grid item>
            <Button className={classes.getEstimate}>Get Estimate</Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
