import * as React from "react";
import "./Navigation.scss";
import skull from "./../../assets/skull.png";
import Menu from "../Menu/Menu";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="nav-container">
      <Link to="/" className="logo-link">
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
      </Link>

      <Menu />
    </nav>
  );
};

export default Navigation;
