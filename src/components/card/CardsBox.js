import React from "react";
import Card from "./Card";
import {
  EcoInverterImage,
  ZubadanImage,
  PanasonicTCap,
} from "../../images/constants";
import classes from "./CardsBox.module.css";

const split = "Split";
const r32 = "R32";

const CardsBox = () => {
  return (
    <div className={classes.cardsBox}>
      <Card
        image={ZubadanImage}
        producent={"Mitsubishi"}
        model={"Zubadan"}
        power={8}
        factor={r32}
        type={split}
      />
      <Card
        image={PanasonicTCap}
        producent={"Panasonic"}
        model={"T-Cap"}
        power={12}
        factor={"R420"}
        type={split}
      />
    </div>
  );
};

export default CardsBox;
