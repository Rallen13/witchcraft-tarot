import React, { useState, useEffect } from "react";
import { getAllCards } from "./Utils/apiCalls";

const App = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    // default load data for mount
    getAllCards().then((json) => {
      setCards({ cards: json.cards[0] });
    });
  }, []);

  return (
    <main className="App">
      <h1>Witchcraft Tarot</h1>
      <section className="tarot-container">
        <div className="tarot-card">
          <h2>{cards.name}</h2>
          <h2>{cards.type}</h2>
          <h2>{cards.meaning_up}</h2>
          <h2>{cards.meaning_rev}</h2>
          <h2>{cards.desc}</h2>
        </div>
      </section>
    </main>
  );
};
export default App;
