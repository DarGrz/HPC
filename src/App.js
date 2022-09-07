import React, { Fragment } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/layouts/Navbar";
import SelectPumps from "./components/SelectPumps";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <SelectPumps />
    </BrowserRouter>
  );
}

export default App;