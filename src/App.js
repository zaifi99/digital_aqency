import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { Routes, Route } from "react-router-dom";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Four04 from "./Components/Four04";
import Home from "./Components/Home";
import Services from "./Components/Services";
import Navbar from "./Components/Navbar";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/contact" element={<Services />} />
        <Route exact path="/services" element={<Contact />} />
        <Route exact path="/about" element={<About />} />
        <Route path="*" element={<Four04 />} />
      </Routes>
    </>
  );
}
