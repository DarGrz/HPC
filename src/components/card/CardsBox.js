import React from "react";
import Card from "./Card";
import classes from "./CardsBox.module.css";

const CardsBox = () => {
  return (
    <div className={classes.cardsBox}>
      <Card />
      <Card />
    </div>
  );
};

export default CardsBox;
