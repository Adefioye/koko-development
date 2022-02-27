import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@material-ui/styles";

import Header from "./client/Header";
import theme from "./client/Theme";
import Footer from "./client/Footer";

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
              element={<div style={{ height: "2000px" }}>Home</div>}
            />
            <Route path="/services" element={<div>Services</div>} />
            <Route path="/customSoftware" element={<div>customSoftware</div>} />
            <Route path="/mobileApps" element={<div>mobileApps</div>} />
            <Route path="/websites" element={<div>websites</div>} />
            <Route path="/revolution" element={<div>revolution</div>} />
            <Route path="/about" element={<div>about</div>} />
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
