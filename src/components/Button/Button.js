import * as React from "react";
import "./Button.scss";
import PropTypes from "prop-types";

const Button = ({ label }) => {
  return <button className="app-button">{label}</button>;
};

export default Button;

Button.propTypes = {
  label: PropTypes.string.isRequired,
};
