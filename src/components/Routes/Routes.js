import * as React from "react";
import { Route, Switch } from "react-router-dom";
import HomeView from "../../views/HomeView/HomeView";

const Routes = () => {
  return (
    <Route exact path="/">
      <HomeView />
    </Route>
    // {/* <Route exact path="*">
    //   <ErrorView error={new Error("This path doesn't exist!")} />
    // </Route> */}
  );
};

export default Routes;
