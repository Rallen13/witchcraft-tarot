import * as React from "react";
import { Button } from "../../components/Button/Button";
import Spacer from "../../components/Spacer/Spacer";
import "./HomeView.scss";

const HomeView = () => {
  return (
    <main className="view">
      <h2 className="header">
        Now is the time
        <br />
        Ours is the magic
      </h2>
      <p>
        Starting each day with this Tarot reading is a terrific way to get
        psyched for all the possibilities—and avoid possible pitfalls. Get your
        reading and obtain insight for the day ahead!
      </p>
      <Button label="Daily Reading" />
      <Button label="3-Card Spread" />
      <Spacer />
      <h3 className="header-2">Before you begin</h3>
    </main>
  );
};

export default HomeView;
