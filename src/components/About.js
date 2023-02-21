import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Avatar from "@material-ui/core/Avatar";
import Hidden from "@material-ui/core/Hidden";

import history from "../assets/history.svg";
import founder from "../assets/founder.jpg";
import yearbook from "../assets/yearbook.svg";
import puppy from "../assets/puppy.svg";
import CallToAction from "./client/CallToAction";

const useStyles = makeStyles((theme) => ({
  rowContainer: {
    paddingLeft: "5em",
    paddingRight: "5em",
    [theme.breakpoints.down("md")]: {
      paddingLeft: "1em",
      paddingRight: "1em",
    },
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "1em",
      paddingRight: "1em",
    },
  },
  missionStatement: {
    fontSize: "1.3rem",
    fontWeight: 300,
    fontStyle: "italic",
    lineHeight: "1.5",
  },
  avatar: {
    width: "20em",
    height: "20em",
    [theme.breakpoints.down("sm")]: {
      width: "12em",
      height: "12em",
    },
  },
}));

export default function About({ setValue, setSelectedIndex }) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Grid container direction="column">
      {/* Title of About us page*/}
      <Grid
        item
        className={classes.rowContainer}
        style={{ marginTop: "2em", marginBottom: "5em" }}
      >
        <Typography align={matchesMD ? "center" : "inherit"} variant="h2">
          About Us
        </Typography>
      </Grid>
      {/* Mission statement */}
      <Grid
        item
        container
        justifyContent="center"
        className={classes.rowContainer}
        style={{ marginBottom: "10em" }}
      >
        <Typography
          align="center"
          variant="h4"
          className={classes.missionStatement}
        >
          Whether it be person to person, business to consumer, or an individual
          to their interests, technology is meant to bring us closer to what we
          care about in the best way possible. Arc Development will use that
          principle to provide fast, modern, inexpensive, and aesthetic software
          to the Midwest and beyond
        </Typography>
      </Grid>
      {/* History section */}
      <Grid
        item
        container
        direction="row"
        justifyContent="space-between"
        className={classes.rowContainer}
      >
        <Grid item container direction="column" style={{ maxWidth: "40em" }} lg>
          <Grid item>
            <Typography
              align={matchesMD ? "center" : "inherit"}
              variant="h4"
              gutterBottom
            >
              History
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              style={{ fontWeight: 700, fontStyle: "italic" }}
              align={matchesMD ? "center" : "inherit"}
              paragraph
            >
              We’re the new kid on the block.
            </Typography>
            <Typography
              align={matchesMD ? "center" : "inherit"}
              variant="body1"
              paragraph
            >
              Founded in 2019, we’re ready to get our hands on the world’s
              business problems.
            </Typography>
            <Typography
              align={matchesMD ? "center" : "inherit"}
              variant="body1"
              paragraph
            >
              It all started with one question: Why aren’t all businesses using
              available technology? There are many different answers to that
              question: economic barriers, social barriers, educational
              barriers, and sometimes institutional barriers.
            </Typography>
            <Typography
              align={matchesMD ? "center" : "inherit"}
              variant="body1"
              paragraph
            >
              We aim to be a powerful force in overcoming these obstacles.
              Recent developments in software engineering and computing power,
              compounded by the proliferation of smart phones, has opened up
              infinite worlds of possibility. Things that have always been done
              by hand can now be done digitally and automatically, and
              completely new methods of interaction are created daily. Taking
              full advantage of these advancements is the name of the game.
            </Typography>
          </Grid>
        </Grid>
        <Grid item container justifyContent="center" lg alignItems="center">
          <img
            src={history}
            width="100%"
            alt="a notebook with a quill"
            style={{ maxHeight: matchesMD ? "12em" : "25em" }}
          />
        </Grid>
      </Grid>
      {/* Founder section */}
      <Grid
        container
        direction="column"
        alignItems="center"
        style={{ marginTop: "10em", marginBottom: "10em" }}
      >
        <Grid item>
          <Typography align="center" variant="h4">
            Team
          </Typography>
        </Grid>
        <Grid item>
          <Typography align="center" variant="body1" paragraph>
            Zachary Reece, Founder
          </Typography>
          <Typography align="center" variant="body1" paragraph>
            I started coding when I was 9 years old.
          </Typography>
        </Grid>
        <Grid item style={{ marginBottom: "2em" }}>
          <Avatar alt="Founder pic" src={founder} className={classes.avatar} />
        </Grid>
        <Hidden lgUp>
          <Grid
            item
            style={{
              marginTop: matchesMD ? "2em" : null,
              marginBottom: matchesMD ? "2em" : null,
              marginLeft: matchesMD ? "1em" : null,
              marginRight: matchesMD ? "1em" : null,
            }}
            lg
          >
            <Typography align="center" variant="body1" paragraph>
              I taught myself basic coding from a library book in third grade,
              and ever since then my passion has solely been set on learning —
              learning about computers, learning mathematics and philosophy,
              studying design, always just learning.
            </Typography>
            <Typography align="center" variant="body1" paragraph>
              Now I’m ready to apply everything I’ve learned, and to help others
              with the
            </Typography>
          </Grid>
        </Hidden>
        <Grid item container direction="row" className={classes.rowContainer}>
          <Grid
            item
            container
            alignItems={matchesMD ? "center" : null}
            direction="column"
            lg
          >
            <Grid item>
              <img
                src={yearbook}
                alt="year book"
                width="100%"
                style={{ maxHeight: "12em" }}
              />
            </Grid>
            <Grid item>
              <Typography align="center" variant="caption">
                a page from my Sophomore yearbook
              </Typography>
            </Grid>
          </Grid>
          <Hidden mdDown>
            <Grid
              item
              style={{
                marginTop: matchesMD ? "2em" : null,
                marginBottom: matchesMD ? "2em" : null,
              }}
              lg
            >
              <Typography align="center" variant="body1" paragraph>
                I taught myself basic coding from a library book in third grade,
                and ever since then my passion has solely been set on learning —
                learning about computers, learning mathematics and philosophy,
                studying design, always just learning.
              </Typography>
              <Typography align="center" variant="body1" paragraph>
                Now I’m ready to apply everything I’ve learned, and to help
                others with the
              </Typography>
            </Grid>
          </Hidden>

          <Grid
            item
            container
            direction="column"
            alignItems={matchesMD ? "center" : "flex-end"}
            style={{ marginTop: matchesSM ? "2em" : null }}
            lg
          >
            <Grid item>
              <img
                src={puppy}
                alt="puppy"
                width="100%"
                style={{ maxHeight: "12em" }}
              />
            </Grid>
            <Grid item>
              <Typography align="center" variant="caption">
                my miniature dapple dachshund, Sterling
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <CallToAction setValue={setValue} setSelectedIndex={setSelectedIndex} />
      </Grid>
    </Grid>
  );
}
