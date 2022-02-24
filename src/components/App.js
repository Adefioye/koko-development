import React from "react";
import Header from "./client/Header";
import theme from "./client/Theme";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@material-ui/styles";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<div>Home</div>} />
            <Route path="/services" element={<div>Services</div>} />
            <Route path="/customSoftware" element={<div>customSoftware</div>} />
            <Route path="/mobileApps" element={<div>mobileApps</div>} />
            <Route path="/websites" element={<div>websites</div>} />
            <Route path="/revolution" element={<div>revolution</div>} />
            <Route path="/about" element={<div>about</div>} />
            <Route path="/contact" element={<div>contact</div>} />
            <Route path="/estimate" element={<div>estimate</div>} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
