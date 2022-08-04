import * as React from "react";
import "./navigation.scss";

export const Navigation = () => {
  return (
    <nav>
      <div className="nav-container">
        <div className="logo-container">
          <h3 className="logo">Witch<br/>Craft<br/>Tarot</h3>
          <img src="src/assets/white_illustration-6.png" alt="skull" className="logo-img"/>
        </div>
        <span className="material-symbols-outlined">menu</span>
      </div>
    </nav>
  );
};
