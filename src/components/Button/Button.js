import * as React from "react";
import "./Button.scss";

const Button = ({ label, onClick }) => {
  return (
    <button onClick={onClick} className="app-button">
      {label}
    </button>
  );
};

export default Button;
