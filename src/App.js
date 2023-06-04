import React from "react";
import { BrowserRouter , Routes, Route, Link } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Homepage from "./Homepage/Homepage";
import Footer from "../src/Footer/Footer";
import About from "../src/pages/about/About";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
