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
        <SpreadView heading="Daily Reading" cardCount={1}/>
      </Route>
      <Route exact path="/3-card-spread">
        <SpreadView heading="3-Card Spread" cardCount={3} />
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
