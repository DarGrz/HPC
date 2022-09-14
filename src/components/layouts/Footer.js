import React from "react";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={classes.footer}>
      <div>
        <span>Nazwa</span>
        <span>Adres</span>
        <span>tel</span>
        <span>mail</span>
      </div>
      <div>
        <div>social media</div>
        <div>social media</div>
      </div>
    </div>
  );
};

export default Footer;
