import React from "react";
import backgroundIMG from "../../images/bgs/family-two-kids.png";
import classes from "./Baner.module.css";

const Baner = (props) => {
  const imgURL =
    "https://img.freepik.com/free-photo/construction-concept-with-engineering-tools_1150-17809.jpg?w=1800&t=st=1662581905~exp=1662582505~hmac=bf45235ea36624bb2f5d185bb69225d5689320406573170aa936ce88acd823b8";
  return (
    <div className={classes.banerEl}>
      <img src={imgURL} alt="background image" />
    </div>
  );
};

export default Baner;
