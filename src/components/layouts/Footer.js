import React from "react";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={classes.footer}>
      <ul>
        <li>
          <a>HPC Comparison App 2022 &#169;</a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
