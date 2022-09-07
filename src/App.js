import React, { Fragment } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/layouts/Navbar";
import SelectPumps from "./components/SelectPumps";
import Baner from "./components/layouts/Baner";
// import Footer from "./components/layouts/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Baner />
        <SelectPumps />
        {/* <Footer /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
