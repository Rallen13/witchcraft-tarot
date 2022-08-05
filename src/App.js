import React, { useState, useEffect } from "react";
import { Button } from "./components/Button/Button.js";
import Navigation from "./components/Navigation/Navigation.js";
import Routes from "./components/Routes/Routes.js";
import { getAllCards } from "./utils/apiCalls";

const App = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    // default load data for mount
    getAllCards().then((json) => {
      setCards(json.cards);
    });
  }, []);

  // const tarotCards = cards.map((card) => {
  //   return (
  //     <>
  //       <h2>{card.name}</h2>
  //       <p>{card.type}</p>
  //       <p>{card.meaning_up}</p>
  //       <p>{card.meaning_rev}</p>
  //       <p>{card.desc}</p>
  //       <Button label="Test" onClick="null" />
  //     </>
  //   );
  // });

  return (
    <main className="App">
      <Navigation />
      <Routes />
    </main>
  );
};
export default App;
