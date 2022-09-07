import React from "react";
import Card from "./Card";
import { EcoInverterImage, ZubadanImage } from "../../utils/constants";
import classes from "./CardsBox.module.css";

const split = "Split";
const r32 = "R32";

const CardsBox = () => {
  return (
    <div className={classes.cardsBox}>
      <Card
        image={ZubadanImage}
        producent={"Mitsubishi Zubadan"}
        factor={r32}
        type={split}
      />
      <Card
        image={EcoInverterImage}
        producent={"Mitsubishi EcoInverter"}
        factor={r32}
        type={split}
      />
    </div>
  );
};

export default CardsBox;
