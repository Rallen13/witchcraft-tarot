import * as React from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import "./LearnMore.scss";

const LearnMore = () => {
  return (
    <div className="learn-more">
      <h4>Want to learn more about all the major & minor arcana cards?</h4>
      <Link to="/explore">
        <Button label="Explore the Deck" className="learn-more-button"></Button>
      </Link>
    </div>
  );
};

export default LearnMore;
