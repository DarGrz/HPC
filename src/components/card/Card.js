import React from "react";
import classes from "./Card.module.css";
import { MitsuZubadanImage } from "../../utils/constants";

const Card = (props) => {
  return (
    <div className={classes.cardBox}>
      <div className={classes.cardImage}>
        <img src={MitsuZubadanImage} />
      </div>
      <div className={classes.cardHeaderText}>
        <span className={classes.headerSpanText}>Mistubishi Zubadan</span>
      </div>
      <div className={classes.cardSpecs}>
        <span>8kW</span> <span>R32</span> <span>Split</span>
      </div>
    </div>
  );
};

export default Card;
