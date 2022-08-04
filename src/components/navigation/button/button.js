import * as React from "react";
import "./button.css";

export const Button = ({ label, onClick })=> {
  return (
    <button onClick={onClick} className="app-button" >
      {label}
    </button>
  );
};
