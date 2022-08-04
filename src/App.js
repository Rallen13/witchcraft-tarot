import React, { useState, useEffect } from "react";
import { Navigation } from "./components/navigation/navigation.js";
import { getAllCards } from "./utils/apiCalls";

const App = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    // default load data for mount
    getAllCards().then((json) => {
      setCards(json.cards);
    });
  }, []);

  const tarotCards = cards.map((card) => {
    return (
      <>
        <h2>{card.name}</h2>
        <p>{card.type}</p>
        <p>{card.meaning_up}</p>
        <p>{card.meaning_rev}</p>
        <p>{card.desc}</p>
      </>
    );
  });

  return (
    <main className="App">
      <Navigation />
      <section className="tarot-container">
        <div className="tarot-card">{tarotCards}</div>
      </section>
    </main>
  );
};
export default App;
