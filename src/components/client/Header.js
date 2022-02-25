import React from "react";
import { useState, useEffect } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import makeStyles from "@material-ui/styles/makeStyles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import useTheme from "@material-ui/styles/useTheme";
import IconButton from "@material-ui/core/IconButton";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import MenuIcon from "@material-ui/icons/Menu";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

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
    [theme.breakpoints.down("md")]: {
      marginBottom: "2em",
    },
    [theme.breakpoints.down("xs")]: {
      marginBottom: "1.25em",
    },
  },
  logoContainer: {
    padding: "0",
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  logo: {
    height: "8em",
    [theme.breakpoints.down("md")]: {
      height: "7em",
    },
    [theme.breakpoints.down("xs")]: {
      height: "5.5em",
    },
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
  drawerIconContainer: {
    marginLeft: "auto",
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  drawerIcon: {
    height: "50px",
    width: "50px",
  },
}));

function Header() {
  const [value, setValue] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const [openMenu, setOpenMenu] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [openDrawer, setOpenDrawer] = useState(false);

  const classes = useStyles();
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
    setOpenMenu(true);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setOpenMenu(false);
  };

  const handleMenuItemClick = (e, index) => {
    setAnchorEl(null);
    setOpenMenu(false);
    setSelectedIndex(index);
    setValue(1);
  };

  const handleChange = (e, newValue) => {
    setValue(newValue);
  };

  const menuOptions = [
    {
      service: "Services",
      link: "/services",
    },
    {
      service: "Custom Software Development",
      link: "/customSoftware",
    },
    {
      service: "Mobile Applications",
      link: "/mobileApps",
    },
    {
      service: "Website Development",
      link: "/websites",
    },
  ];

  // This is important to retain the active navigation tab after refresh
  useEffect(() => {
    switch (window.location.pathname) {
      case "/":
        if (value !== 0) {
          setValue(0);
        }
        break;
      case "/services":
        if (value !== 1) {
          setValue(1);
          setSelectedIndex(0);
        }
        break;
      case "/customSoftware":
        if (value !== 1) {
          setValue(1);
          setSelectedIndex(1);
        }
        break;
      case "/mobileApps":
        if (value !== 1) {
          setValue(1);
          setSelectedIndex(2);
        }
        break;
      case "/websites":
        if (value !== 1) {
          setValue(1);
          setSelectedIndex(3);
        }
        break;
      case "/revolution":
        if (value !== 2) {
          setValue(2);
        }
        break;
      case "/about":
        if (value !== 3) {
          setValue(3);
        }
        break;
      case "/contact":
        if (value !== 4) {
          setValue(4);
        }
        break;
      default:
        break;
    }
  }, [value]);

  const tabs = (
    <>
      <Tabs
        value={value}
        onChange={handleChange}
        className={classes.tabContainer}
        indicatorColor="primary"
      >
        <Tab label="Home" component={Link} to="/" className={classes.tab} />

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
      <Button variant="contained" color="secondary" className={classes.button}>
        Free Estimate
      </Button>
      <Menu
        aria-owns="simple-menu"
        anchorEl={anchorEl}
        open={openMenu}
        onClose={handleClose}
        MenuListProps={{ onMouseLeave: handleClose }}
        classes={{ paper: classes.menu }}
        elevation={0}
      >
        {menuOptions.map((menu, index) => (
          <MenuItem
            key={menu.service}
            component={Link}
            classes={{ root: classes.menuItem }}
            onClick={(e) => {
              handleMenuItemClick(e, index);
            }}
            to={menu.link}
            selected={selectedIndex === index && value === 1}
          >
            {menu.service}
          </MenuItem>
        ))}
      </Menu>
    </>
  );

  const drawer = (
    <>
      <SwipeableDrawer
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
      >
        <List disablePadding>
          <ListItem onClick={() => setOpenDrawer(false)} divider button component={Link} to="/">
            <ListItemText disableTypography>Home</ListItemText>
          </ListItem>
          <ListItem onClick={() => setOpenDrawer(false)} divider button component={Link} to="/services">
            <ListItemText disableTypography>Services</ListItemText>
          </ListItem>
          <ListItem onClick={() => setOpenDrawer(false)}  divider button component={Link} to="/revolution">
            <ListItemText disableTypography>The Revolution</ListItemText>
          </ListItem>
          <ListItem onClick={() => setOpenDrawer(false)} divider button component={Link} to="/about">
            <ListItemText disableTypography>About Us</ListItemText>
          </ListItem>
          <ListItem onClick={() => setOpenDrawer(false)} divider button component={Link} to="/contact">
            <ListItemText disableTypography>Contact Us</ListItemText>
          </ListItem>
          <ListItem onClick={() => setOpenDrawer(false)} divider button component={Link} to="/estimate">
            <ListItemText disableTypography>Free Estimate</ListItemText>
          </ListItem>
        </List>
      </SwipeableDrawer>
      <IconButton
        className={classes.drawerIconContainer}
        onClick={() => setOpenDrawer(!openDrawer)}
        disableRipple
      >
        <MenuIcon className={classes.drawerIcon} />
      </IconButton>
    </>
  );

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
            {/* For Injecting the tabs in the header */}
            {matches ? drawer : tabs}
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </>
  );
}

export default Header;
