import React, { useState, useEffect } from "react";
import InstructionBlock from "../../components/InstructionBlock/InstructionBlock";
import ErrorView from "../ErrorView/ErrorView";
import { getAllCards } from "../../utils/apiCalls";
import { executeAsync } from "../../utils/errorHandler";
import "./ExploreView.scss";
import { Link } from "react-router-dom";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

const ExploreView = () => {
  const [cards, setCards] = useState([]);
  const [error, setError] = useState();
  const [filter, setFilter] = useState("major");
  const [filteredCards, setFilteredCards] = useState([]);

  //component mounted gets all cards
  useEffect(() => {
    getExploreCall();
  }, []);

  //listens to the filter change and filters cards
  useEffect(() => {
    const filteredCardsFromQuery = cards.filter(
      (card) => card.type === filter || card.suit === filter
    );
    setFilteredCards(filteredCardsFromQuery);
  }, [filter, cards]);

  //api call with error handling
  const getExploreCall = async () => {
    const [res, err] = await executeAsync(() => getAllCards());
    if (err) {
      return setError(err);
    }
    setCards(res.cards);
  };

  //eventhandler for MUI toggle button group from docs
  const handleFilter = (event, filterQuery) => {
    if (filterQuery !== null) {
      setFilter(filterQuery);
    }
  };

  const renderCards = filteredCards.map((card) => {
    return (
      <Link
        to={`/explore/${card.name_short}`}
        className="card-link"
        key={card.name_short}
      >
        <img
          src={require(`../../assets/cards/${card.name_short}.jpg`)}
          alt={card.name}
          className="tarot-card"
        />
      </Link>
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
      <div className="filter-container">
        <ToggleButtonGroup
          value={filter}
          exclusive
          onChange={handleFilter}
          aria-label="text alignment"
          className="toggle-button-group"
        >
          <ToggleButton
            value="major"
            aria-label="major arcana"
            className="toggle-button"
          >
            Major
          </ToggleButton>
          <ToggleButton
            value="pentacles"
            aria-label="pentacles suit"
            className="toggle-button"
          >
            Pentacles
          </ToggleButton>
          <ToggleButton
            value="swords"
            aria-label="sword suit"
            className="toggle-button"
          >
            Swords
          </ToggleButton>
          <ToggleButton
            value="cups"
            aria-label="cup suit"
            className="toggle-button"
          >
            Cups
          </ToggleButton>
          <ToggleButton
            value="wands"
            aria-label="wand suit"
            className="toggle-button"
          >
            Wands
          </ToggleButton>
        </ToggleButtonGroup>
      </div>
      <div className="explore-container">
        {!cards ? <h2>Shuffling Cards</h2> : renderCards}
      </div>
    </main>
  );
};

export default ExploreView;
