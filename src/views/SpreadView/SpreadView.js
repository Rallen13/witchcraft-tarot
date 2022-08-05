import * as React from "react";
import InstructionBlock from "../../components/InstructionBlock/InstructionBlock";

const SpreadView = ({heading}) => {
  return (
    <main className="view">
      <h2>{heading}</h2>
      <InstructionBlock heading="Pick A Card">
        What does the future have in store for you? Now is time to discover the
        day's possibilities!
      </InstructionBlock>
    </main>
  );
};

export default SpreadView;
