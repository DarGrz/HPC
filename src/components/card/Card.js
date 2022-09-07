import React from "react";
import classes from "./Card.module.css";
import { MitsuZubadanImage } from "../../utils/constants";

const Card = (props) => {
  return (
    <div className={classes.cardBox}>
      <div className={classes.cardImage}>
        <img src={props.image} />
      </div>
      <div className={classes.cardHeaderText}>
        <span className={classes.headerSpanText}>{props.producent}</span>
      </div>
      <div className={classes.cardSpecs}>
        <span>{props.power}kW</span> <span>{props.factor}</span>
        <span>{props.type}</span>
      </div>
    </div>
  );
};

export default Card;
