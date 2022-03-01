import { createMuiTheme } from "@material-ui/core/styles";

const arcBlue = "#0B72B9";
const arcOrange = "#FFBA60";
const arcGrey = "#868686";

export default createMuiTheme({
  palette: {
    common: {
      blue: arcBlue,
      orange: `${arcOrange}`,
    },
    primary: {
      main: arcBlue,
    },
    secondary: {
      main: arcOrange,
    },
  },
  typography: {
    tab: {
      fontWeight: 700,
      fontFamily: "Raleway",
      textTransform: "none",
      fontSize: "1rem",
    },
    estimate: {
      fontFamily: "Pacifico",
      fontSize: "1rem",
      textTransform: "none",
      color: "white",
    },
    h2: {
      fontFamily: "Raleway",
      fontWeight: 700,
      color: arcBlue,
      lineHeight: 1.5,
      fontSize: "2.5rem",
    },
    h4: {
      fontFamily: "Raleway",
      fontWeight: 700,
      color: arcBlue,
      fontSize: "1.75rem",
    },
    subtitle1: {
      fontSize: "1.25rem",
      fontWeight: 300,
      color: arcGrey,
    },
    learnButton: {
      borderRadius: 50,
      borderWidth: 2,
      borderColor: arcBlue,
      textTransform: "none",
      fontFamily: "Roboto",
      fontWeight: "bold",
      color: arcBlue,
    },
  },
});
