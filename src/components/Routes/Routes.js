import * as React from "react";
import { Route, Switch } from "react-router-dom";
import HomeView from "../../views/HomeView/HomeView";
import ExploreView from "../../views/ExploreView/ExploreView";
import ErrorView from "../../views/ErrorView/ErrorView";
import SpreadView from "../../views/SpreadView/SpreadView";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/explore">
        <ExploreView />
      </Route>
      <Route exact path="/daily-reading">
        <SpreadView
          heading="Daily Reading"
          instructionHeading="Pick a card"
          instructionCopy="What does the future have in store for you? Now is time to discover the day's possibilities!"
          cardCount={1}
        />
      </Route>
      <Route exact path="/3-card-spread">
        <SpreadView
          heading="3-Card Spread"
          instructionHeading="pick three cards"
          instructionCopy="This spread may seem simple, but it's also very versatile. You can use the cards to denote past, present, and future, or, situation, action, and outcome. If you're doing a relationship reading, you can even designate the first card as yourself, the second as your partner (or potential partner), and the third as the relationship between you both. Just don't change the parameters of the inquiry mid-reading!"
          cardCount={3}
        />
      </Route>
      <Route exact path="/">
        <HomeView />
      </Route>
      <Route exact path="*">
        <ErrorView error={new Error("This path doesn't exist!")} />
      </Route>
    </Switch>
  );
};

export default Routes;
