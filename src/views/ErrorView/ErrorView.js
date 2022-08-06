import * as React from "react";
import "./ErrorView.scss";

const ExploreView = ({ error }) => {
  return (
    <>
      <main className="view error-view">
        <h2 className="error-heading">I bind you from accessing this page, from doing harm...</h2>
        <h2 className="error-heading">Harm against other pages and harm against tarot.</h2>
        <h4>{error.message}</h4>
      </main>
      <div className="error-background"></div>
    </>
  );
};

export default ExploreView;
