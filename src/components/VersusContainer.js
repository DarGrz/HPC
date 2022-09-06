import React, { useState } from "react";
import { VersusButton } from "./ui";
import classes from "./VersusContainer.module.css";
function VersusContainer(props) {
  return (
    <>
      <div id="VersusContainer" className={classes.VersusContainer}>
        <h3>Popularne porównania:</h3>
        <div className={classes.versusButtons}>
          <VersusButton onClick={props.onClick}>
            Zubadan vs Eco Inverter
          </VersusButton> 
        </div>
      </div>
    </>
  );
}

export default VersusContainer;
