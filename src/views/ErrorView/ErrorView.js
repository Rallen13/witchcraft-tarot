import * as React from "react";

const ExploreView = ({error}) => {
  return (
    <main className="view">
      <h2>Error View</h2>
      <h4>{error.message}</h4>
    </main>
  );
};

export default ExploreView;
