import React from "react";
import logoWhite from "../../images/logo/logo.png";
import classes from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={classes.navbar}>
      <div className={classes.logo}>
        <img src={logoWhite} alt="logo" />
      </div>
    </div>
  );
};

export default Navbar;
