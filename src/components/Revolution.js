import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import vision from "../assets/vision.svg";
import consultation from "../assets/consultationIcon.svg";
import mockup from "../assets/mockupIcon.svg";
import review from "../assets/reviewIcon.svg";
import design from "../assets/designIcon.svg";
import build from "../assets/buildIcon.svg";
import launch from "../assets/launchIcon.svg";
import maintain from "../assets/maintainIcon.svg";
import iterate from "../assets/iterateIcon.svg";
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
}));

export default function Revolution({ setValue, setSelectedIndex }) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Grid container direction="column">
      {/* Title of revolution */}
      <Grid item className={classes.rowContainer} style={{ marginTop: "2em" }}>
        <Typography
          align={matchesMD ? "center" : "inherit"}
          variant="h2"
          style={{ fontFamily: "Pacifico" }}
        >
          The Revolution
        </Typography>
      </Grid>
      {/* Section on Vision */}
      <Grid
        item
        container
        alignItems="center"
        direction={matchesMD ? "column" : "row"}
        className={classes.rowContainer}
        style={{ marginTop: "5em" }}
      >
        <Grid
          item
          // container
          style={{
            marginRight: "2em",
            marginBottom: matchesMD ? "5em" : null,
          }}
          justifyContent={matchesMD ? "center" : null}
          lg
        >
          <img
            src={vision}
            alt="vision logo"
            width={matchesSM ? "300px" : matchesMD ? "500px" : "700px"}
          />
        </Grid>
        <Grid item style={{ maxWidth: "38em" }} lg>
          <Grid item container direction="column">
            <Grid item>
              <Typography
                align={matchesMD ? "center" : "right"}
                variant="h4"
                gutterBottom
              >
                Vision
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                align={matchesMD ? "center" : "right"}
                variant="body1"
                paragraph
              >
                The rise of computers, and subsequently the Internet, has
                completely altered every aspect of human life. This has
                increased our comfort, broadened our connections, and reshaped
                how we view the world.
              </Typography>
              <Typography
                align={matchesMD ? "center" : "right"}
                variant="body1"
                paragraph
              >
                What once was confined to huge rooms and teams of engineers now
                resides in every single one of our hands. Harnessing this
                unlimited potential by using it to solve problems and better
                lives is at the heart of everything we do.
              </Typography>
              <Typography
                align={matchesMD ? "center" : "right"}
                variant="body1"
                paragraph
              >
                We want to help businesses capitalize on the latest and greatest
                technology. The best way to predict the future is to be the one
                building it, and we want to help guide the world into this next
                chapter of technological expansion, exploration, and innovation.
              </Typography>
              <Typography
                align={matchesMD ? "center" : "right"}
                variant="body1"
                paragraph
              >
                By holding ourselves to rigorous standards and pristine quality,
                we can ensure you have the absolute best tools necessary to
                thrive in this new frontier.
              </Typography>
              <Typography
                align={matchesMD ? "center" : "right"}
                variant="body1"
                paragraph
              >
                We see a future where every individual has personalized software
                custom tailored to their lifestyle, culture, and interests,
                helping them
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      {/* Section on Technology*/}
      <Grid
        item
        container
        direction={matchesMD ? "column" : "row"}
        alignItems="center"
        className={classes.rowContainer}
        style={{ marginTop: "10em", marginBottom: "10em" }}
      >
        <Grid
          item
          style={{
            maxWidth: "38em",
            marginRight: "2em",
            marginBottom: matchesMD ? "5em" : null,
          }}
          lg
        >
          <Grid item container direction="column">
            <Grid item>
              <Typography
                align={matchesMD ? "center" : "inherit"}
                variant="h4"
                gutterBottom
              >
                Technology
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                align={matchesMD ? "center" : "inherit"}
                variant="body1"
                paragraph
              >
                In 2013, Facebook invented a new way of building websites. This
                new system, React.js, completely revolutionizes the process and
                practice of website development.
              </Typography>
              <Typography
                align={matchesMD ? "center" : "inherit"}
                variant="body1"
                paragraph
              >
                Instead of chaining together long individual pages, like
                traditional websites, React websites are built with little
                chunks of code called components. These components are faster,
                easier to maintain, and are easily reused and customized, each
                serving a singular purpose.
              </Typography>
              <Typography
                align={matchesMD ? "center" : "inherit"}
                variant="body1"
                paragraph
              >
                Two years later they shocked the world by releasing a similar
                system, React Native, for producing iOS and Android apps.
                Instead of having to master two completely separate development
                platforms, you can leverage the knowledge you already possessed
                from building websites and reapply it directly! This was a huge
                leap forward
              </Typography>
              <Typography
                align={matchesMD ? "center" : "inherit"}
                variant="body1"
                paragraph
              >
                This technology is now being used by companies like AirBnB,
                Microsoft, Netflix, Pinterest, Skype, Tesla, UberEats, and when
                Facebook purchased Instagram large portions of it were even
                rebuilt using React.
              </Typography>
              <Typography
                align={matchesMD ? "center" : "inherit"}
                variant="body1"
                paragraph
              >
                Developers have since built on top of these systems by
                automating project setup and deployment, allowing creators to
                focus as much as possible on their work itself.
              </Typography>
              <Typography
                align={matchesMD ? "center" : "inherit"}
                variant="body1"
                paragraph
              >
                These technical advancements translate into savings by
                significantly reducing the workload and streamlining the
                workflow for developing new pieces of software, while also
                lowering the barrier to entry for mobile app development.
              </Typography>
              <Typography
                align={matchesMD ? "center" : "inherit"}
                variant="body1"
                paragraph
              >
                This puts personalization in your pocket — faster, better, and
                more affordable than ever before.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item lg>
          <img
            src={vision}
            alt="vision logo"
            width={matchesSM ? "300px" : matchesMD ? "500px" : "700px"}
          />
        </Grid>
      </Grid>
      {/* Section on Title (PROCESS) */}
      <Grid
        item
        container
        justifyContent="center"
        direction="row"
        style={{ marginBottom: "3em" }}
        className={classes.rowContainer}
      >
        <Grid item>
          <Typography variant="h4">Process</Typography>
        </Grid>
      </Grid>
      {/*Section on Consultation*/}
      <Grid
        item
        container
        alignItems={matchesMD ? "center" : null}
        direction={matchesMD ? "column" : "row"}
        className={classes.rowContainer}
        style={{ backgroundColor: "#B3B3B3", height: "70em" }}
      >
        <Grid item container direction="column" style={{ maxWidth: "25em" }} lg>
          <Grid item style={{ marginTop: "2em" }}>
            <Typography
              align={matchesMD ? "center" : "inherit"}
              variant="h4"
              gutterButtom
              style={{ color: "#000" }}
            >
              Consultation
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              align={matchesMD ? "center" : "inherit"}
              variant="body1"
              paragraph
              style={{ color: "#FFF" }}
            >
              Our process begins the moment you realize you need a piece of
              technology for your business. Whether you already have an idea for
              where to start and what to do, or if you just know you want to
              step things up, our initial consultation will help you examine
              your business holistically to find the best solutions.
            </Typography>
            <Typography
              align={matchesMD ? "center" : "inherit"}
              variant="body1"
              paragraph
              style={{ color: "#FFF" }}
            >
              Detailed notes will be taken on your requirements and constraints,
              while taking care to identify other potential areas for
              consideration.
            </Typography>
            <Typography
              align={matchesMD ? "center" : "inherit"}
              variant="body1"
              paragraph
              style={{ color: "#FFF" }}
            >
              Cutting-edge advancements in machine learning like object
              detection and natural language processing allow computers to do
              things previously unimaginable, and our expertise and intuition
              will help usher you into this new future of possibilities.
            </Typography>
          </Grid>
        </Grid>
        <Grid item style={{ alignSelf: "center" }} lg>
          <img
            src={consultation}
            alt="handshake logo"
            width="100%"
            style={{ maxWidth: "500px" }}
          />
        </Grid>
      </Grid>
      {/* Section on Mockup */}
      <Grid
        item
        container
        alignItems={matchesMD ? "center" : null}
        direction={matchesMD ? "column" : "row"}
        className={classes.rowContainer}
        style={{ backgroundColor: "#FF7373", height: "70em" }}
      >
        <Grid item container direction="column" style={{ maxWidth: "25em" }} lg>
          <Grid item style={{ marginTop: "2em" }}>
            <Typography
              align={matchesMD ? "center" : "inherit"}
              variant="h4"
              gutterButtom
              style={{ color: "#000" }}
            >
              Mockup
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              align={matchesMD ? "center" : "inherit"}
              variant="body1"
              paragraph
              style={{ color: "#FFF" }}
            >
              After we settle on the best path forward and decide on a solution
              to pursue, details like the cost and timeline will be finalized.
            </Typography>
            <Typography
              align={matchesMD ? "center" : "inherit"}
              variant="body1"
              paragraph
              style={{ color: "#FFF" }}
            >
              Then it’s time for us to start on your minimum viable product.
              That’s just a fancy term for a mockup, which doesn’t include
              colors, images, or any other polished design elements, but
              captures the essential layout structure and functionality
            </Typography>
            <Typography
              align={matchesMD ? "center" : "inherit"}
              variant="body1"
              paragraph
              style={{ color: "#FFF" }}
            >
              This helps us understand and refine the solution itself before
              getting distracted by specifics and looks.
            </Typography>
          </Grid>
        </Grid>
        <Grid item style={{ alignSelf: "center" }} lg>
          <img
            src={mockup}
            alt="computer screen icon"
            width="100%"
            style={{ maxWidth: "500px" }}
          />
        </Grid>
      </Grid>
      {/*Section on Review*/}
      <Grid
        item
        container
        alignItems={matchesMD ? "center" : null}
        direction={matchesMD ? "column" : "row"}
        className={classes.rowContainer}
        style={{ backgroundColor: "#39B54A", height: "70em" }}
      >
        <Grid item container direction="column" style={{ maxWidth: "25em" }} lg>
          <Grid item style={{ marginTop: "2em" }}>
            <Typography
              align={matchesMD ? "center" : "inherit"}
              variant="h4"
              gutterButtom
              style={{ color: "#000" }}
            >
              Review
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              align={matchesMD ? "center" : "inherit"}
              variant="body1"
              paragraph
              style={{ color: "#FFF" }}
            >
              Before moving any farther we come back to you with our progress.
              This gives you the freedom to discuss any changes you may want or
              any ideas you may have come up with before any heavy lifting has
              been done.
            </Typography>
            <Typography
              align={matchesMD ? "center" : "inherit"}
              variant="body1"
              paragraph
              style={{ color: "#FFF" }}
            >
              We give you an interactive demonstration of the mockups,
              thoroughly explaining the thought process that went into each
              screen and every anticipated feature.
            </Typography>
            <Typography
              align={matchesMD ? "center" : "inherit"}
              variant="body1"
              paragraph
              style={{ color: "#FFF" }}
            >
              Once you’re completely satisfied with the vision for our solution
              we get down to the nitty gritty, finedetails of design.
            </Typography>
          </Grid>
        </Grid>
        <Grid item style={{ alignSelf: "center" }} lg>
          <img
            src={review}
            alt="magnifying glass logo"
            width="100%"
            style={{ maxWidth: matchesMD ? "300px" : "500px" }}
          />
        </Grid>
      </Grid>
      {/*Section on Design*/}
      <Grid
        item
        container
        alignItems={matchesMD ? "center" : null}
        direction={matchesMD ? "column" : "row"}
        className={classes.rowContainer}
        style={{ backgroundColor: "#A67C52", height: "70em" }}
      >
        <Grid item container direction="column" style={{ maxWidth: "25em" }} lg>
          <Grid item style={{ marginTop: "2em" }}>
            <Typography
              align={matchesMD ? "center" : "inherit"}
              variant="h4"
              gutterButtom
              style={{ color: "#000" }}
            >
              Design
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              align={matchesMD ? "center" : "inherit"}
              variant="body1"
              paragraph
              style={{ color: "#FFF" }}
            >
              Using the mockups and notes taken during the consultation as
              guides, we will start ironing out what the final product will look
              like. This also involves using any brand material like fonts,
              colors, and logos to extend the experience you’re already familiar
              with.
            </Typography>
            <Typography
              align={matchesMD ? "center" : "inherit"}
              variant="body1"
              paragraph
              style={{ color: "#FFF" }}
            >
              No aspect is superfluous, and care will be taken with every
              decision.
            </Typography>
          </Grid>
        </Grid>
        <Grid item style={{ alignSelf: "center" }} lg>
          <img
            src={design}
            alt="paintbrush and paint logo"
            width="100%"
            style={{ maxWidth: "700px" }}
          />
        </Grid>
      </Grid>
      {/*Section on Second Review*/}
      <Grid
        item
        container
        alignItems={matchesMD ? "center" : null}
        direction={matchesMD ? "column" : "row"}
        className={classes.rowContainer}
        style={{ backgroundColor: "#39B54A", height: "70em" }}
      >
        <Grid item container direction="column" style={{ maxWidth: "25em" }} lg>
          <Grid item style={{ marginTop: "2em" }}>
            <Typography
              align={matchesMD ? "center" : "inherit"}
              variant="h4"
              gutterButtom
              style={{ color: "#000" }}
            >
              Review
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              align={matchesMD ? "center" : "inherit"}
              variant="body1"
              paragraph
              style={{ color: "#FFF" }}
            >
              A second round of review is essential to our goal of creating
              exactly what you want, exactly how you want it.
            </Typography>
            <Typography
              align={matchesMD ? "center" : "inherit"}
              variant="body1"
              paragraph
              style={{ color: "#FFF" }}
            >
              This time we’ll be going over the finalized designs in another
              fully interactive demonstration. Again this gives you an
              opportunity to tweak things and make sure we get everything right
              the first time.
            </Typography>
          </Grid>
        </Grid>
        <Grid item style={{ alignSelf: "center" }} lg>
          <img
            src={review}
            alt="magnifying glass logo"
            width="100%"
            style={{ maxWidth: matchesMD ? "300px" : "500px" }}
          />
        </Grid>
      </Grid>
      {/*Section on Build */}
      <Grid
        item
        container
        alignItems={matchesMD ? "center" : null}
        direction={matchesMD ? "column" : "row"}
        className={classes.rowContainer}
        style={{ backgroundColor: "#FBB03B", height: "90em" }}
      >
        <Grid item container direction="column" style={{ maxWidth: "25em" }} lg>
          <Grid item style={{ marginTop: "2em" }}>
            <Typography
              align={matchesMD ? "center" : "inherit"}
              variant="h4"
              gutterButtom
              style={{ color: "#000" }}
            >
              Build
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              align={matchesMD ? "center" : "inherit"}
              variant="body1"
              paragraph
              style={{ color: "#FFF" }}
            >
              Here’s where we get down to business.
            </Typography>
            <Typography
              align={matchesMD ? "center" : "inherit"}
              variant="body1"
              paragraph
              style={{ color: "#FFF" }}
            >
              Engineering begins after your approval on the final designs. We
              start by scaffolding out the project on a high level, prioritizing
              some areas over others.
            </Typography>
            <Typography
              align={matchesMD ? "center" : "inherit"}
              variant="body1"
              paragraph
              style={{ color: "#FFF" }}
            >
              Each area is then developed in order of importance until ready to
              be connected to the next piece.
            </Typography>
            <Typography
              align={matchesMD ? "center" : "inherit"}
              variant="body1"
              paragraph
              style={{ color: "#FFF" }}
            >
              Typically the backend, behind the scenes operations are completed
              first. Once all the services are in place we can then create the
              front end, user side of things.
            </Typography>
            <Typography
              align={matchesMD ? "center" : "inherit"}
              variant="body1"
              paragraph
              style={{ color: "#FFF" }}
            >
              Finishing the application doesn’t mean we’re done though, because
              we use extensive testing to guarantee compatibility with all
              intended devices.
            </Typography>
            <Typography
              align={matchesMD ? "center" : "inherit"}
              variant="body1"
              paragraph
              style={{ color: "#FFF" }}
            >
              Only after our rigorous examinations will we accept a product as
              finished, then pushing it through the production pipeline. This
              produces an optimized, compressed, consumer version of the code
              and assets ready for deployment.
            </Typography>
          </Grid>
        </Grid>
        <Grid item style={{ alignSelf: "center" }} lg>
          <img
            src={build}
            alt="construction building with a crane"
            width="100%"
            style={{
              maxWidth: matchesMD ? "300px" : "700px",
            }}
          />
        </Grid>
      </Grid>
      {/*Section on Launch*/}
      <Grid
        item
        container
        alignItems={matchesMD ? "center" : null}
        direction={matchesMD ? "column" : "row"}
        className={classes.rowContainer}
        style={{ backgroundColor: "#C1272D", height: "90em" }}
      >
        <Grid item container direction="column" style={{ maxWidth: "25em" }} lg>
          <Grid item style={{ marginTop: "2em" }}>
            <Typography
              align={matchesMD ? "center" : "inherit"}
              variant="h4"
              gutterButtom
              style={{ color: "#000" }}
            >
              Launch
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              align={matchesMD ? "center" : "inherit"}
              variant="body1"
              paragraph
              style={{ color: "#FFF" }}
            >
              The moment we’ve all been waiting for.
            </Typography>
            <Typography
              align={matchesMD ? "center" : "inherit"}
              variant="body1"
              paragraph
              style={{ color: "#FFF" }}
            >
              When construction comes to a close you’re the first one to know.
              We’ll give our final demonstration to show off your shiny new
              software in the wild so you know exactly how it will look to your
              users.
            </Typography>
            <Typography
              align={matchesMD ? "center" : "inherit"}
              variant="body1"
              paragraph
              style={{ color: "#FFF" }}
            >
              When you say the word, we press the button and launch your project
              out to the public. We’re there to ensure everything goes to plan
              so you can start reaping the rewards of your technological
              investment immediately.
            </Typography>
          </Grid>
        </Grid>
        <Grid item style={{ alignSelf: "center" }} lg>
          <img
            src={launch}
            alt="rocket on a launch"
            width="100%"
            style={{
              maxWidth: matchesMD ? "100px" : "200px",
            }}
          />
        </Grid>
      </Grid>
      {/*Section on Maintain */}
      <Grid
        item
        container
        alignItems={matchesMD ? "center" : null}
        direction={matchesMD ? "column" : "row"}
        className={classes.rowContainer}
        style={{ backgroundColor: "#8E45CE", height: "70em" }}
      >
        <Grid item container direction="column" style={{ maxWidth: "25em" }} lg>
          <Grid item style={{ marginTop: "2em" }}>
            <Typography
              align={matchesMD ? "center" : "inherit"}
              variant="h4"
              gutterButtom
              style={{ color: "#000" }}
            >
              Maintain
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              align={matchesMD ? "center" : "inherit"}
              variant="body1"
              paragraph
              style={{ color: "#FFF" }}
            >
              Our work doesn’t end there.
            </Typography>
            <Typography
              align={matchesMD ? "center" : "inherit"}
              variant="body1"
              paragraph
              style={{ color: "#FFF" }}
            >
              After a successful launch we keep in close contact to listen to
              feedback and hear how the project is being received.
            </Typography>
            <Typography
              align={matchesMD ? "center" : "inherit"}
              variant="body1"
              paragraph
              style={{ color: "#FFF" }}
            >
              From there on out we make sure your application is kept up to date
              and taking advantage of the best features and practices available.
              When new developments arise or new techniques are discovered in
              future projects, we will implement those advancements in your
              project as part of our routine maintenance.
            </Typography>
          </Grid>
        </Grid>
        <Grid item style={{ alignSelf: "center" }} lg>
          <img
            src={maintain}
            alt="spanner and bolts"
            style={{
              maxWidth: matchesSM ? "100px" : matchesMD ? "200px" : "700px",
            }}
          />
        </Grid>
      </Grid>
      {/*Section on Iterate*/}
      <Grid
        item
        container
        alignItems={matchesMD ? "center" : null}
        direction={matchesMD ? "column" : "row"}
        className={classes.rowContainer}
        style={{ backgroundColor: "#29ABE2", height: "70em" }}
      >
        <Grid item container direction="column" style={{ maxWidth: "25em" }} lg>
          <Grid item style={{ marginTop: "2em" }}>
            <Typography
              align={matchesMD ? "center" : "inherit"}
              variant="h4"
              gutterButtom
              style={{ color: "#000" }}
            >
              Iterate
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              align={matchesMD ? "center" : "inherit"}
              variant="body1"
              paragraph
              style={{ color: "#FFF" }}
            >
              The cycle repeats whenever you come up with a new idea for
              extending your current project, or come up with a brand new system
              entirely.
            </Typography>
            <Typography
              align={matchesMD ? "center" : "inherit"}
              variant="body1"
              paragraph
              style={{ color: "#FFF" }}
            >
              By planning for future features and changes we can build and
              evolve your application over time. As new use cases and customer
              needs develop we can respond with continuous integration of new
              content.
            </Typography>
            <Typography
              align={matchesMD ? "center" : "inherit"}
              variant="body1"
              paragraph
              style={{ color: "#FFF" }}
            >
              Our iterative process will keep you current and competitive,
              allowing you to quickly implement changes instead of waiting
              months for a single update.
            </Typography>
          </Grid>
        </Grid>
        <Grid item style={{ alignSelf: "center" }} lg>
          <img
            src={iterate}
            alt="blocks with domino effect"
            width="100%"
            style={{ maxWidth: "700px" }}
          />
        </Grid>
      </Grid>
      {/* CAll to action section*/}
      <Grid item>
        <CallToAction setValue={setValue} setSelectedIndex={setSelectedIndex} />
      </Grid>
    </Grid>
  );
}
