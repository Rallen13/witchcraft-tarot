import * as React from "react";
import PropTypes from "prop-types";
import "./InstructionBlock.scss";

const InstructionBlock = ({ heading, children }) => {
  return (
    <div className="instruction-block" data-cy="instruction-block">
      <h4>{heading}</h4>
      <p>{children}</p>
    </div>
  );
};

export default InstructionBlock;

InstructionBlock.propTypes = {
  heading: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
