import * as React from "react";
import "./Button.scss";

export const Button = ({ label, onClick }) => {
  return (
    <button onClick={onClick} className="app-button">
      {label}
    </button>
  );
};
