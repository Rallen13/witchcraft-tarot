import React, { useState, useEffect } from "react";
import InstructionBlock from "../../components/InstructionBlock/InstructionBlock";
import LearnMore from "../../components/LearnMore/LearnMore";
import Spacer from "../../components/Spacer/Spacer";
import ErrorView from "../ErrorView/ErrorView";
import { getRandomCards } from "../../utils/apiCalls";
import { executeAsync } from "../../utils/errorHandler";
import { withRouter } from "react-router-dom";
import "./DailyReadingView.scss";
import CardSummary from "../../components/CardSummary/CardSummary";

const SpreadView = () => {
  const [cards, setCards] = useState([]);
  const [error, setError] = useState();

  useEffect(() => {
    getSpreadCall();
  }, []);

  const getSpreadCall = async () => {
    const [res, err] = await executeAsync(() => getRandomCards(1));
    if (err) {
      return setError(err);
    }
    setCards(res.cards);
    console.log(res);
  };

  const renderCards = cards.map((card) => {
    return <CardSummary card={card} key={card.name} />;
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
      <h2>Daily Reading</h2>
      <InstructionBlock heading="Pick a card">
        What does the future have in store for you? Now is time to discover the
        day's possibilities!
      </InstructionBlock>
      <div className="card-container">
        {!cards ? <h2>Shuffling Cards</h2> : renderCards}
      </div>
      <LearnMore />
    </main>
  );
};

export default withRouter(SpreadView);
