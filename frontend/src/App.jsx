import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import "./App.css";
import Home from "./components/Home.jsx";
import Form from "./components/Form.jsx";
import About from "./components/About.jsx";
import  Navbar  from "./components/Navbar.jsx";


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/form" element={<Form />} />
          
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
