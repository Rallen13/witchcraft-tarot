import * as React from "react";
import "./ErrorView.scss";

const ExploreView = ({ error }) => {
  return (
    <>
      <main className="view error-view">
        <h2>Error View</h2>
        <h4>{error.message}</h4>
      </main>
      <div className="error-background"></div>
    </>
  );
};

export default ExploreView;
