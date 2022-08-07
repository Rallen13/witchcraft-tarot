import * as React from "react";
import Button from "../../components/Button/Button";
import InstructionBlock from "../../components/InstructionBlock/InstructionBlock";
import LearnMore from "../../components/LearnMore/LearnMore";
import Spacer from "../../components/Spacer/Spacer";
import steps from "../../data/steps.json";
import { Link } from "react-router-dom";

const HomeView = () => {
  const stepsToBegin = steps.map((step, index) => {
    return (
      <InstructionBlock key={index} heading={step.heading}>
        {step.copy}
      </InstructionBlock>
    );
  });

  return (
    <main className="view">
      <h2 data-cy="home-view-heading">
        Now is the time
        <br />
        Ours is the magic
      </h2>
      <p data-cy="home-view-paragraph">
        Starting each day with this Tarot reading is a terrific way to get
        psyched for all the possibilities—and avoid possible pitfalls. Get your
        reading and obtain insight for the day ahead!
      </p>
      <Link to="/daily-reading" data-cy="daily-reading-button">
        <Button label="Daily Reading" />
      </Link>
      <Link to="/3-card-spread" data-cy="3-card-spread-button">
        <Button label="3-Card Spread" />
      </Link>
      <Spacer />
      <h3 data-cy="home-view-heading2">Before you begin</h3>
      <section data-cy="home-view-section">{stepsToBegin}</section>
      <Spacer />
      <Link to="/daily-reading" data-cy="daily-reading-button2">
        <Button label="Daily Reading" />
      </Link>
      <Link to="/3-card-spread" data-cy="3-card-spread-button2">
        <Button label="3-Card Spread" />
      </Link>
      <Spacer />
      <LearnMore />
    </main>
  );
};

export default HomeView;
