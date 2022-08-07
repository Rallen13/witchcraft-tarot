import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import InstructionBlock from "../../components/InstructionBlock/InstructionBlock";
import LearnMore from "../../components/LearnMore/LearnMore";
import ErrorView from "../ErrorView/ErrorView";
import CardSummary from "../../components/CardSummary/CardSummary";
import { getSearchCards } from "../../utils/apiCalls";
import { executeAsync } from "../../utils/errorHandler";
import Spacer from "../../components/Spacer/Spacer";
import "./CardDetailView.scss";

const CardDetailView = ({ nameShort }) => {
  const [cards, setCards] = useState([]);
  const [error, setError] = useState();

  useEffect(() => {
    const getSingleCardCall = async () => {
      const [res, err] = await executeAsync(() => getSearchCards(nameShort));
      if (err) {
        return setError(err);
      }
      setCards(res.cards);
    };
    getSingleCardCall();
  }, [nameShort]);

  const renderCards = cards.map((card) => {
    return (
      <div key={card.name}>
        <CardSummary card={card}  explore={true} />
        <InstructionBlock heading="description">
          {card.desc}
        </InstructionBlock>
      </div>
    );
  });

  if (error) {
    return (
      <>
        <ErrorView error={error} />
      </>
    );
  }

  return (
    <main className="view">
      <h2>Card Details</h2>
      <div className="card-detail-container">
        {!cards ? <h2>Shuffling Cards</h2> : renderCards}
      </div>
      <Spacer />
      <LearnMore />
    </main>
  );
};

export default CardDetailView;

CardDetailView.propTypes = {
  nameShort: PropTypes.string.isRequired,
};
