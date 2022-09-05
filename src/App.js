import React, { Fragment } from "react";
import SelectPumps from "./components/SelectPumps";
import Baner from "./components/Baner";
import "./App.css";

function App() {
  return (
    <Fragment>
      <Baner />
      <SelectPumps />
    </Fragment>
  );
}

export default App;
