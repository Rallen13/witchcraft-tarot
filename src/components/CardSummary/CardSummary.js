import React from "react";
import { useState } from "react";
import PropTypes from "prop-types";
import InstructionBlock from "../InstructionBlock/InstructionBlock";
import Spacer from "../Spacer/Spacer";
import "./CardSummary.scss";

const CardSummary = ({ card, explore }) => {
  const [isFlipped, setIsFlipped] = useState(explore);

  const onCardClick = () => {
    setIsFlipped(true);
  };

  return (
    <div className="card-summary-container" key={card.name_short}>
      {isFlipped ? (
        <div data-cy="card-summary">
          <img
            src={require(`../../assets/cards/${card.name_short}.jpg`)}
            alt={card.name}
            className="tarot-card"
            data-cy="card-summary-img"
          />
          <h4 className="card-name" data-cy="card-summary-name">{card.name}</h4>
          <h4 className="card-type" data-cy="card-summary-type">{card.type} arcana</h4>
          <InstructionBlock heading="Upright Meaning">
            {card.meaning_up}
          </InstructionBlock>
          <InstructionBlock heading="Reverse Meaning">
            {card.meaning_rev}
          </InstructionBlock>
        </div>
      ) : (
        <img
          src={require(`../../assets/cards/back.jpg`)}
          alt={card.name}
          className="tarot-card tarot-back"
          onClick={() => onCardClick()}
          data-cy="tarot-back"
        />
      )}
      <Spacer />
    </div>
  );
};

export default CardSummary;

CardSummary.propTypes = {
  card: PropTypes.object.isRequired,
  explore: PropTypes.bool,
};

CardSummary.defaultProps = {
  explore: false,
};
