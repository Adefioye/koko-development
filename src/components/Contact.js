import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { Link } from "react-router-dom";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";

import phoneIcon from "../assets/phone.svg";
import emailIcon from "../assets/email.svg";
import background from "../assets/background.jpg";
import mobileBackground from "../assets/mobileBackground.jpg";
import airplane from "../assets/send.svg";

const useStyles = makeStyles((theme) => ({
  background: {
    backgroundImage: `url(${background})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "50em",
    paddingBottom: "10em",
    [theme.breakpoints.down("md")]: {
      backgroundImage: `url(${mobileBackground})`,
    },
  },
  learnButton: {
    ...theme.typography.learnButton,
    fontSize: "0.7em",
    height: 35,
    padding: 5,
    [theme.breakpoints.down("md")]: {
      marginTop: "2em",
    },
  },
  learnMoreText: {
    marginRight: "0.5em",
  },
  learnMoreArrowIcon: {
    fontSize: "1.5em",
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
    [theme.breakpoints.down("md")]: {
      marginLeft: 0,
      marginRight: 0,
      marginTop: "2em",
    },
  },
  sendText: {
    ...theme.typography.estimate,
    borderRadius: 50,
    width: 200,
    height: 45,
    fontSize: "1rem",
    backgroundColor: theme.palette.common.orange,
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
  },
  message: {
    border: `2px solid ${theme.palette.common.blue}`,
    borderRadius: 5,
    marginTop: "5em",
  },
}));

export default function Contact({ setValue, setSelectedIndex }) {
  const [name, setName] = useState("");

  const [email, setEmail] = useState("");
  const [emailHelper, setEmailHelper] = useState("");

  const [phone, setPhone] = useState("");
  const [phoneHelper, setPhoneHelper] = useState("");

  const [message, setMessage] = useState("");

  const [open, setOpen] = useState(false);

  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  const handleChange = (e) => {
    let valid;

    switch (e.target.id) {
      case "email":
        setEmail(e.target.value);
        valid = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(
          e.target.value
        );

        if (!valid) {
          setEmailHelper("Invalid email entry");
        } else {
          setEmailHelper("");
        }
        break;
      case "phone":
        setPhone(e.target.value);
        valid =
          /^\+?\d{1,3}?[- .]?\(?(?:\d{2,3})\)?[- .]?\d\d\d[- .]?\d\d\d\d$/.test(
            e.target.value
          );

        if (!valid) {
          setPhoneHelper("Invalid phone entry, Please add your country code!");
        } else {
          setPhoneHelper("");
        }
        break;
      default:
        break;
    }
  };

  return (
    <Grid container direction="row">
      {/*Contact form*/}
      <Grid item container direction="column" alignItems="center" lg={4} xl={3}>
        <Grid item>
          <Grid
            container
            direction="column"
            style={{
              marginTop: "2em",
              marginBottom: matchesMD ? "5em" : null,
            }}
          >
            <Grid item>
              <Typography
                align={matchesMD ? "center" : "inherit"}
                variant="h2"
                style={{ lineHeight: 1 }}
              >
                {" "}
                Contact Us
              </Typography>
              <Typography
                align={matchesMD ? "center" : "inherit"}
                variant="body1"
                style={{ color: theme.palette.common.blue }}
              >
                We're waiting
              </Typography>
            </Grid>
            <Grid item container style={{ marginTop: "2em" }}>
              <Grid item>
                <img
                  src={phoneIcon}
                  alt="phone icon"
                  style={{ marginRight: "0.5em", verticalAlign: "bottom" }}
                />
              </Grid>
              <Grid item>
                <Typography
                  variant="body1"
                  style={{ color: theme.palette.common.blue, fontSize: "1rem" }}
                >
                  <a
                    href="tel:5555555555"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    (555) 555-5555
                  </a>
                </Typography>
              </Grid>
            </Grid>
            <Grid item container style={{ marginBottom: "2em" }}>
              <Grid item verticalAlign="bottom">
                <img
                  src={emailIcon}
                  alt="email icon"
                  style={{ marginRight: "0.5em", verticalAlign: "bottom" }}
                />
              </Grid>
              <Grid item>
                <Typography
                  variant="body1"
                  style={{ color: theme.palette.common.blue, fontSize: "1rem" }}
                >
                  <a
                    href="mailto:abdulhakeemadefioye@gmail.com"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    abdulhakeemadefioye@gmail.com
                  </a>
                </Typography>
              </Grid>
            </Grid>
            <Grid
              item
              container
              direction="column"
              style={{ maxWidth: "20em" }}
            >
              <Grid item style={{ marginBottom: "0.5em" }}>
                <TextField
                  label="Name"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  fullWidth
                />
              </Grid>
              <Grid item style={{ marginBottom: "0.5em" }}>
                <TextField
                  error={phoneHelper.length !== 0}
                  helperText={phoneHelper}
                  label="Phone"
                  id="phone"
                  value={phone}
                  onChange={handleChange}
                  fullWidth
                />
              </Grid>
              <Grid item style={{ marginBottom: "0.5em" }}>
                <TextField
                  error={emailHelper.length !== 0}
                  helperText={emailHelper}
                  label="Email"
                  id="email"
                  value={email}
                  onChange={handleChange}
                  fullWidth
                />
              </Grid>
              <Grid item>
                <TextField
                  InputProps={{ disableUnderline: true }}
                  id="message"
                  multiline
                  minRows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className={classes.message}
                  fullWidth
                />
              </Grid>
              <Grid
                item
                container
                justifyContent="center"
                style={{ marginTop: "2em" }}
              >
                <Button
                  disabled={
                    name.length === 0 ||
                    email.length === 0 ||
                    phone.length === 0 ||
                    message.length === 0 ||
                    emailHelper.length !== 0 ||
                    phoneHelper.length !== 0
                  }
                  variant="contained"
                  className={classes.sendText}
                  onClick={() => setOpen(true)}
                >
                  Send Message <img src={airplane} alt="paper plane" />
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      {/* Section to show Dialog content*/}
      <Dialog
        style={{ zIndex: 1302 }}
        open={open}
        fullScreen={matchesXS ? "100%" : null}
        onClose={() => setOpen(false)}
        PaperProps={{
          style: {
            paddingTop: matchesMD ? "1em" : "5em",
            paddingBottom: matchesMD ? "1em" : "5em",
            paddingLeft: matchesXS
              ? 0
              : matchesSM
              ? "5em"
              : matchesMD
              ? "10em"
              : "20em",
            paddingRight: matchesXS
              ? 0
              : matchesSM
              ? "5em"
              : matchesMD
              ? "10em"
              : "20em",
          },
        }}
      >
        <DialogContent>
          <Grid container direction="column">
            <Grid item>
              <Typography align="center" variant="h4">
                Confirm message
              </Typography>
            </Grid>
            <Grid item container direction="column">
              <Grid item style={{ marginBottom: "0.5em" }}>
                <TextField
                  label="Name"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  fullWidth
                />
              </Grid>
              <Grid item style={{ marginBottom: "0.5em" }}>
                <TextField
                  error={phoneHelper.length !== 0}
                  helperText={phoneHelper}
                  label="Phone"
                  id="phone"
                  value={phone}
                  onChange={handleChange}
                  fullWidth
                />
              </Grid>
              <Grid item style={{ marginBottom: "0.5em" }}>
                <TextField
                  error={emailHelper.length !== 0}
                  helperText={emailHelper}
                  label="Email"
                  id="email"
                  value={email}
                  onChange={handleChange}
                  fullWidth
                />
              </Grid>
              <Grid item>
                <TextField
                  InputProps={{ disableUnderline: true }}
                  id="message"
                  multiline
                  minRows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className={classes.message}
                  fullWidth
                />
              </Grid>
            </Grid>
            <Grid
              item
              container
              alignItems="center"
              justifyContent="center"
              direction={matchesSM ? "column" : "row"}
              style={{ marginTop: "2em" }}
            >
              <Grid item style={{ marginBottom: matchesSM ? "1em" : 0 }}>
                <Button
                  style={{ fontWeight: 300 }}
                  color="primary"
                  onClick={() => setOpen(false)}
                >
                  Cancel
                </Button>
              </Grid>
              <Grid item>
                <Button
                  disabled={
                    name.length === 0 ||
                    email.length === 0 ||
                    phone.length === 0 ||
                    message.length === 0 ||
                    emailHelper.length !== 0 ||
                    phoneHelper.length !== 0
                  }
                  variant="contained"
                  className={classes.sendText}
                  onClick={() => setOpen(true)}
                >
                  Send Message <img src={airplane} alt="paper plane" />
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>

      {/* Call To action */}
      <Grid
        item
        container
        direction={matchesMD ? "column" : "row"}
        justifyContent={matchesMD ? "center" : null}
        alignItems="center"
        className={classes.background}
        lg={8}
        xl={9}
      >
        <Grid item style={{ marginLeft: matchesMD ? 0 : "3em" }}>
          <Grid
            container
            style={{ textAlign: matchesMD ? "center" : null }}
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
                style={{ justifyContent: matchesMD ? "center" : "inherit" }}
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
    </Grid>
  );
}
