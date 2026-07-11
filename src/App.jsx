import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import FlexoconeNavbar from "./components/FlexoconeNavbar";

import Home from "./components/pages/Home";
import About from "./components/pages/About";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <FlexoconeNavbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;