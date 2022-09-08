import React from "react";
import classes from "./ScoreElement.module.css";

const ScoreElement = (props) => {
  // left pump
  const power = parseInt(props.pump.power);
  const makstemp = parseInt(props.pump.makstemp);
  const yearpowusage = parseInt(props.pump.yearpowusage) / 1000;
  const nominal35 = parseInt(props.pump.nominal35);
  const nominal55 = parseInt(props.pump.nominal55);
  const maksmin10w35 = parseInt(props.pump.maksmin10w35);
  const makmin15w35 = parseInt(props.pump.makmin15w35);
  const db = parseInt(props.pump.db);
  const coolantamount = parseInt(props.pump.coolantamount);

  const scorePumpOne =
    power +
    makstemp +
    yearpowusage +
    nominal35 +
    nominal55 +
    makmin15w35 +
    maksmin10w35 -
    db -
    coolantamount;
  console.log(scorePumpOne.toFixed(2));

  return <div className={classes.pktCircle}>{scorePumpOne.toFixed(2)} PKT</div>;
};

export default ScoreElement;
