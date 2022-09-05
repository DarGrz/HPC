import React from "react";
import { VersusButton } from "./ui";
import classes from "./VersusContainer.module.css";
function VersusContainer(props) {
  return (
    <>
      <div id="VersusContainer" className={classes.VersusContainer}>
        <VersusButton onClick={props.onClick}>
          Zubadan vs Eco Inverter
        </VersusButton>
        <VersusButton onClick={props.onClick}>
          Zubadan vs Eco Inverter
        </VersusButton>
        <VersusButton onClick={props.onClick}>
          Zubadan vs Eco Inverter
        </VersusButton>

        <VersusButton onClick={props.onClick}>
          Zubadan vs Eco Inverter
        </VersusButton>
      </div>
    </>
  );
}

export default VersusContainer;
