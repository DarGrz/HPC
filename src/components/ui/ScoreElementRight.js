import React from "react";
import classes from "./ScoreElement.module.css";

const ScoreElementRight = (props) => {
  // right pump stats

  const power2 = parseInt(props.pump2.power);
  const makstemp2 = parseInt(props.pump2.makstemp);
  const yearpowusage2 = parseInt(props.pump2.yearpowusage) / 1000;
  const nominal352 = parseInt(props.pump2.nominal35);
  const nominal552 = parseInt(props.pump2.nominal55);
  const maksmin10w352 = parseInt(props.pump2.maksmin10w35);
  const makmin15w352 = parseInt(props.pump2.makmin15w35);
  const db2 = parseInt(props.pump2.db);
  const coolantamount2 = parseInt(props.pump2.coolantamount);

  const scorePumpTwo =
    power2 +
    makstemp2 +
    yearpowusage2 +
    nominal352 +
    nominal552 +
    makmin15w352 +
    maksmin10w352 -
    db2 -
    coolantamount2;

  const scoreParsed = scorePumpTwo.toFixed(2);

  return <div className={classes.pktCircle}>{scoreParsed} PKT</div>;
};

export default ScoreElementRight;
