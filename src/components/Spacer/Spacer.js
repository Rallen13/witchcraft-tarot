import * as React from "react";
import "./Spacer.scss";
import spacer from "./../../assets/white_illustration-19 copy.png";

const Spacer = () => {
  return (
    <div data-cy="spacer">
      <img src={spacer} alt="spacer illustration of stars" className="spacer" />
    </div>
  );
};

export default Spacer;
