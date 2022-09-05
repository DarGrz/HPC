import React from "react";
import classes from "./VersusButton.module.css";

const VersusButton = (props) => {
  return (
    <button className={classes.versusButton} onClick={props.onClick}>
      {props.children}{" "}
    </button>
  );
};

export default VersusButton;
