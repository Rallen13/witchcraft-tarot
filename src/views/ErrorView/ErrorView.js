import * as React from "react";
import PropTypes from "prop-types";
import "./ErrorView.scss";

const ErrorView = ({ error }) => {
  return (
    <>
      <main className="view error-view">
        <h2 className="error-heading" data-cy="error-heading">
          I bind you from accessing this page, from doing harm...
        </h2>
        <h2 className="error-heading">
          Harm against other pages and harm against tarot.
        </h2>
        <h4>{error.message}</h4>
      </main>
      <div className="error-background"></div>
    </>
  );
};

export default ErrorView;

ErrorView.propTypes = {
  error: PropTypes.object,
};
