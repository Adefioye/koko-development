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
import { Menu } from "@material-ui/core";
import { MenuItem } from "@material-ui/core";

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
  menu: {
    background: theme.palette.common.blue,
    color: "white",
  },
  menuItem: {
    ...theme.typography.tab,
    opacity: 0.7,
    "&:hover": {
      opacity: 1,
    },
  },
}));

function Header() {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
    setOpen(true);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setOpen(false);
  };

  const handleChange = (e, value) => {
    setValue(value);
  };

  // This is important to retain the active navigation tab after refresh
  useEffect(() => {
    if (window.location.pathname === "/" && value !== 0) {
      setValue(0);
    } else if (window.location.pathname === "/services" && value !== 1) {
      setValue(1);
    } else if (window.location.pathname === "/customSoftware" && value !== 1) {
      setValue(1);
    } else if (window.location.pathname === "/mobileApps" && value !== 1) {
      setValue(1);
    } else if (window.location.pathname === "/websites" && value !== 1) {
      setValue(1);
    } else if (window.location.pathname === "/revolution" && value !== 2) {
      setValue(2);
    } else if (window.location.pathname === "/about" && value !== 3) {
      setValue(3);
    } else if (window.location.pathname === "/contact" && value !== 4) {
      setValue(4);
    }
  }, [value]);

  return (
    <>
      <ElevationScroll>
        <AppBar position="fixed">
          <Toolbar disableGutters>
            <Button
              className={classes.logoContainer}
              component={Link}
              to="/"
              onClick={() => setValue(0)}
              disableRipple
            >
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
                aria-owns={anchorEl ? "simple-menu" : undefined}
                aria-haspopup={anchorEl ? "true" : undefined}
                label="Services"
                component={Link}
                to="/services"
                className={classes.tab}
                onMouseOver={handleClick}
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
            <Menu
              aria-owns="simple-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{ onMouseLeave: handleClose }}
              classes={{ paper: classes.menu }}
              elevation={0}
            >
              <MenuItem
                classes={{ root: classes.menuItem }}
                onClick={() => {
                  handleClose();
                  setValue(1);
                }}
                component={Link}
                to="/services"
              >
                Services
              </MenuItem>
              <MenuItem
                classes={{ root: classes.menuItem }}
                onClick={() => {
                  handleClose();
                  setValue(1);
                }}
                component={Link}
                to="/customSoftware"
              >
                Custom Software Development
              </MenuItem>
              <MenuItem
                classes={{ root: classes.menuItem }}
                onClick={() => {
                  handleClose();
                  setValue(1);
                }}
                component={Link}
                to="/mobileApps"
              >
                Mobile Applications
              </MenuItem>
              <MenuItem
                classes={{ root: classes.menuItem }}
                onClick={() => {
                  handleClose();
                  setValue(1);
                }}
                component={Link}
                to="/websites"
              >
                Website Development
              </MenuItem>
            </Menu>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </>
  );
}

export default Header;
