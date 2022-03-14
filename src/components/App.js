import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@material-ui/styles";

import Header from "./client/Header";
import theme from "./client/Theme";
import Footer from "./client/Footer";
import LandingPage from "./LandingPage";
import Services from "./Services";
import CustomSoftware from "./CustomSoftware";
import MobileApps from "./MobileApps";
import Websites from "./Websites";
import Revolution from "./Revolution";
import About from "./About";

function App() {
  const [value, setValue] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Header
            value={value}
            setValue={setValue}
            selectedIndex={selectedIndex}
            setSelectedIndex={setSelectedIndex}
          />

          <Routes>
            <Route
              path="/"
              element={
                <LandingPage
                  setValue={setValue}
                  setSelectedIndex={setSelectedIndex}
                />
              }
            />
            <Route
              path="/services"
              element={
                <Services
                  setValue={setValue}
                  setSelectedIndex={setSelectedIndex}
                />
              }
            />
            <Route
              path="/customSoftware"
              element={
                <CustomSoftware
                  setValue={setValue}
                  setSelectedIndex={setSelectedIndex}
                />
              }
            />
            <Route
              path="/mobileApps"
              element={
                <MobileApps
                  setValue={setValue}
                  setSelectedIndex={setSelectedIndex}
                />
              }
            />
            <Route
              path="/websites"
              element={
                <Websites
                  setValue={setValue}
                  setSelectedIndex={setSelectedIndex}
                />
              }
            />
            <Route
              path="/revolution"
              element={
                <Revolution
                  setValue={setValue}
                  setSelectedIndex={setSelectedIndex}
                />
              }
            />
            <Route
              path="/about"
              element={
                <About
                  setValue={setValue}
                  setSelectedIndex={setSelectedIndex}
                />
              }
            />
            <Route path="/contact" element={<div>contact</div>} />
            <Route path="/estimate" element={<div>estimate</div>} />
          </Routes>

          <Footer
            value={value}
            setValue={setValue}
            selectedIndex={selectedIndex}
            setSelectedIndex={setSelectedIndex}
          />
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
