import * as React from "react";
import InstructionBlock from "../../components/InstructionBlock/InstructionBlock";
import LearnMore from "../../components/LearnMore/LearnMore";
import Spacer from "../../components/Spacer/Spacer";

const SpreadView = ({ heading, instructions }) => {
  return (
    <main className="view">
      <h2>{heading}</h2>
      <InstructionBlock heading={instructions.heading}>
        {instructions.copy}
      </InstructionBlock>
      <Spacer />
      <LearnMore />
    </main>
  );
};

export default SpreadView;
