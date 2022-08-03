import React, { Component } from "react";
import { getAllCards } from "./Utils/apiCalls";

class App extends Component {
  constructor() {
    super();
    this.state = {
      cards: [],
    };
  }

  componentDidMount() {
    // default load data for mount
    getAllCards().then((json) => {
      console.log(json.cards);
      this.setState({ cards: json.cards[0] });
    });
  }

  render() {
    return (
      <main className="App">
        <h1>Witchcraft Tarot</h1>
        <section className="tarot-container">
          <div className="tarot-card">
            <h2>{this.state.cards.name}</h2>
            <h2>{this.state.cards.type}</h2>
            <h2>{this.state.cards.meaning_up}</h2>
            <h2>{this.state.cards.meaning_rev}</h2>
            <h2>{this.state.cards.desc}</h2>
          </div>
        </section>
      </main>
    );
  }
}

export default App;
