import * as React from "react";
import InstructionBlock from "../../components/InstructionBlock/InstructionBlock";

const ExploreView = () => {
  return (
    <main className="view">
      <h2>Explore The Deck</h2>
      <InstructionBlock
        heading="MAJOR & MINOR ARCANA TAROT CARD MEANINGS"
      >
        Learn what each card of the tarot deck means—the major arcana, the minor
        arcana, they're all here.
      </InstructionBlock>
    </main>
  );
};

export default ExploreView;
