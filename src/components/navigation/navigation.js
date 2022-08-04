import * as React from "react";
import "./navigation.scss";
import skull from "src/assets/skull.png";

export const Navigation = () => {
  return (
    <nav>
      <div className="nav-container">
        <div className="logo-container">
          <h3 className="logo">
            Witch
            <br />
            Craft
            <br />
            Tarot
          </h3>
          <img src={skull} alt="skull" className="logo-img"></img>
        </div>
        <span className="material-symbols-outlined">menu</span>
      </div>
    </nav>
  );
};
