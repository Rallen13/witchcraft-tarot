import * as React from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import "./LearnMore.scss";

const LearnMore = () => {
  return (
    <Link to="/explore">
      <div className="learn-more">
        <h4>Want to learn more about all the major & minor arcana cards?</h4>
        <Button label="Explore the Deck" className="learn-more-button"></Button>
      </div>
    </Link>
  );
};

export default LearnMore;
