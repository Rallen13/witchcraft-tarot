import * as React from "react";
import "./Navigation.scss";
import skull from "./../../assets/skull.png";
import Menu from "../Menu/Menu";

const Navigation = () => {
  return (
    <nav className="nav-container">
      <div className="logo-container">
        <h1 className="logo">
          Witch
          <br />
          Craft
          <br />
          Tarot
        </h1>
        <img src={skull} alt="skull" className="logo-img"></img>
      </div>
      
      <Menu />
    </nav>
  );
};

export default Navigation;
