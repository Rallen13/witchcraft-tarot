import * as React from "react";
import { Route, Switch } from "react-router-dom";
import HomeView from "../../views/HomeView/HomeView";
import ExploreView from "../../views/ExploreView/ExploreView";
import ErrorView from "../../views/ErrorView/ErrorView";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <HomeView />
      </Route>
      <Route exact path="/explore">
        <ExploreView />
      </Route>
      <Route exact path="*">
        <ErrorView error={new Error("This path doesn't exist!")} />
      </Route>
    </Switch>
  );
};

export default Routes;
