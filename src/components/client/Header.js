import React from "react";
import { useState, useEffect } from "react";
import { AppBar } from "@material-ui/core";
import { Toolbar } from "@material-ui/core";
import { useScrollTrigger } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { Tabs } from "@material-ui/core";
import { Tab } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

import logo from "../../assets/logo.svg";

function ElevationScroll(props) {
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: "3em",
  },
  logoContainer: {
    padding: "0",
    "&:hover": {
      background: "transparent",
    },
  },
  logo: {
    height: "8em",
  },
  tabContainer: {
    marginLeft: "auto",
  },
  tab: {
    ...theme.typography.tab,
    minWidth: "10px",
    marginLeft: "25px",
  },
  button: {
    ...theme.typography.estimate,
    marginRight: "50px",
    marginLeft: "25px",
    borderRadius: "50px",
    height: "45px",
  },
}));

function Header() {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (e, value) => {
    setValue(value);
  };

  useEffect(() => { 
    if (window.location.pathname === "/" && value !== 0){
      setValue(0)
    } else if (window.location.pathname === "/services" && value !== 1) {
      setValue(1)
    } else if (window.location.pathname === "/revolution" && value !== 2) {
      setValue(2)
    } else if (window.location.pathname === "/about" && value !== 3) {
      setValue(3)
    } else if (window.location.pathname === "/contact" && value !== 4) {
      setValue(4)
    }
  }, [value])

  return (
    <>
      <ElevationScroll>
        <AppBar position="fixed">
          <Toolbar disableGutters>
            <Button className={classes.logoContainer} component={Link} to="/" onClick={()=> setValue(0)} disableRipple>
              <img className={classes.logo} src={logo} alt="Company logo" />
            </Button>

            <Tabs
              value={value}
              onChange={handleChange}
              className={classes.tabContainer}
              indicatorColor="primary"
            >
              <Tab
                label="Home"
                component={Link}
                to="/"
                className={classes.tab}
              />

              <Tab
                label="Services"
                component={Link}
                to="/services"
                className={classes.tab}
              />

              <Tab
                label="The Revolution"
                component={Link}
                to="/revolution"
                className={classes.tab}
              />

              <Tab
                label="About Us"
                component={Link}
                to="/about"
                className={classes.tab}
              />

              <Tab
                label="Contact Us"
                component={Link}
                to="/contact"
                className={classes.tab}
              />
            </Tabs>
            <Button
              variant="contained"
              color="secondary"
              className={classes.button}
            >
              Free Estimate
            </Button>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </>
  );
}

export default Header;
