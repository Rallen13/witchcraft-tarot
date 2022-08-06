import React, { useState, useEffect } from "react";
import InstructionBlock from "../../components/InstructionBlock/InstructionBlock";
import LearnMore from "../../components/LearnMore/LearnMore";
import Spacer from "../../components/Spacer/Spacer";
import ErrorView from "../ErrorView/ErrorView";
import { getRandomCards } from "../../utils/apiCalls";
import { executeAsync } from "../../utils/errorHandler";
import { withRouter } from "react-router-dom";

const SpreadView = () => {
  const [cards, setCards] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    getSpreadCall();
  }, []);

  const getSpreadCall = async () => {
    const [res, err] = await executeAsync(() => getRandomCards(3));
    if (err) {
      return setError(err);
    }
    setCards(res.cards);
    console.log(res);
  };

  if (error) {
    return (
      <>
        <ErrorView error={error} />
      </>
    );
  }

  return (
    <main className="view">
      <h2>3-Card Spread</h2>
      <InstructionBlock heading="Pick Three Cards">
        This spread may seem simple, but it's also very versatile. You can use
        the cards to denote past, present, and future, or, situation, action,
        and outcome. If you're doing a relationship reading, you can even
        designate the first card as yourself, the second as your partner (or
        potential partner), and the third as the relationship between you both.
        Just don't change the parameters of the inquiry mid-reading!
      </InstructionBlock>
      <Spacer />
      <LearnMore />
    </main>
  );
};

export default withRouter(SpreadView);
