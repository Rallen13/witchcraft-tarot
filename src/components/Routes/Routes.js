import * as React from "react";
import { Route, Switch } from "react-router-dom";
import HomeView from "../../views/HomeView/HomeView";
import ExploreView from "../../views/ExploreView/ExploreView";
import ErrorView from "../../views/ErrorView/ErrorView";
import SpreadView from "../../views/SpreadView/SpreadView";
import DailyReadingView from "../../views/DailyReadingView/DailyReadingView";
import CardDetailView from "../../views/CardDetailView/CardDetailView";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/explore/:nameShort">
        {({ match }) => {
          return <CardDetailView nameShort={match.params.nameShort} />;
        }}
      </Route>
      <Route exact path="/explore">
        <ExploreView />
      </Route>
      <Route exact path="/daily-reading">
        <DailyReadingView />
      </Route>
      <Route exact path="/3-card-spread">
        <SpreadView />
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
