import * as React from "react";
import "./Button.scss";

const Button = ({ label }) => {
  return <button className="app-button">{label}</button>;
};

export default Button;
