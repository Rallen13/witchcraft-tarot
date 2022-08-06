import React, { useState, useEffect } from "react";
import InstructionBlock from "../../components/InstructionBlock/InstructionBlock";
import ErrorView from "../ErrorView/ErrorView";
import { getAllCards } from "../../utils/apiCalls";
import { executeAsync } from "../../utils/errorHandler";
import './ExploreView.scss';

const ExploreView = () => {
  const [cards, setCards] = useState([]);
  const [error, setError] = useState();

  useEffect(() => {
    getExploreCall();
  }, []);

  const getExploreCall = async () => {
    const [res, err] = await executeAsync(() => getAllCards());
    if (err) {
      return setError(err);
    }
    setCards(res.cards);
    console.log(res);
  };

  const renderCards = cards.map((card) => {
    return (
      <img
        src={require(`../../assets/cards/${card.name_short}.jpg`)}
        alt={card.name}
        className="tarot-card"
      />
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
      <h2>Explore The Deck</h2>
      <InstructionBlock heading="MAJOR & MINOR ARCANA TAROT CARD MEANINGS">
        Learn what each card of the tarot deck means—the major arcana, the minor
        arcana, they're all here.
      </InstructionBlock>
      <div className="explore-container">
        {!cards ? <h2>Shuffling Cards</h2> : renderCards}
      </div>
    </main>
  );
};

export default ExploreView;
