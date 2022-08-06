import * as React from "react";
import Button from "../../components/Button/Button";
import InstructionBlock from "../../components/InstructionBlock/InstructionBlock";
import LearnMore from "../../components/LearnMore/LearnMore";
import Spacer from "../../components/Spacer/Spacer";
import steps from "../../data/steps.json";

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
      <h2>
        Now is the time
        <br />
        Ours is the magic
      </h2>
      <p>
        Starting each day with this Tarot reading is a terrific way to get
        psyched for all the possibilities—and avoid possible pitfalls. Get your
        reading and obtain insight for the day ahead!
      </p>
      <Button label="Daily Reading" />
      <Button label="3-Card Spread" />
      <Spacer />
      <h3>Before you begin</h3>
      <section>{stepsToBegin}</section>
      <Spacer />
      <Button label="Daily Reading" />
      <Button label="3-Card Spread" />
      <Spacer />
      <LearnMore />
    </main>
  );
};

export default HomeView;
