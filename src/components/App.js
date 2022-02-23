import React from "react";
import Header from "./client/Header";
import theme from "./client/Theme";
import { ThemeProvider } from "@material-ui/styles";



function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Header />
        Hello!
      </ThemeProvider>
    </div>
  );
}

export default App;
