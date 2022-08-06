import * as React from "react";
import { useState } from "react";
import PropTypes from "prop-types";
import InstructionBlock from "../InstructionBlock/InstructionBlock";
import Spacer from "../Spacer/Spacer";
import "./CardSummary.scss";

const CardSummary = ({ card }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const onCardClick = () => {
    setIsFlipped(true);
  };

  return (
    <div className="card-summary-container" key={card.name_short}>
      {isFlipped ? (
        <>
          <img
            src={require(`../../assets/cards/${card.name_short}.jpg`)}
            alt={card.name}
            className="tarot-card"
          />
          <h4 className="card-name">{card.name}</h4>
          <h4 className="card-type">{card.type} arcana</h4>
          <InstructionBlock heading="Upright Meaning">
            {card.meaning_up}
          </InstructionBlock>
          <InstructionBlock heading="Reverse Meaning">
            {card.meaning_rev}
          </InstructionBlock>
        </>
      ) : (
        <img
          src={require(`../../assets/cards/back.jpg`)}
          alt={card.name}
          className="tarot-card tarot-back"
          onClick={() => onCardClick()}
        />
      )}
      <Spacer />
    </div>
  );
};

export default CardSummary;

CardSummary.propTypes = {
  card: PropTypes.object.isRequired,
};
