import * as React from "react";
import "./Navigation.scss";
import skull from './../../assets/skull.png'

const Navigation = () => {
  return (
    <nav>
      <div className="nav-container">
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
        <span className="material-symbols-outlined">menu</span>
      </div>
    </nav>
  );
};

export default Navigation;
