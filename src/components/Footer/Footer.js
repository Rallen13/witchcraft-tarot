import * as React from "react";
import "./Footer.scss";

export const Footer = () => {
  return (
    <footer className="footer" data-cy="footer">
      <a
        href="https://github.com/Rallen13/witchcraft-tarot"
        target="blank"
        data-cy="git-hub-link"
      >
        Developed by Rachel Allen{" "}
        <span className="material-symbols-outlined">open_in_new</span>
      </a>
    </footer>
  );
};
