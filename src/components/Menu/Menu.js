import React, { useState } from "react";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import "./Menu.scss";

export default function Menu() {
  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = () => (
    <Box
      role="presentation"
      className="menu-container"
      onClick={toggleDrawer("right", false)}
      onKeyDown={toggleDrawer("right", false)}
    >
      <Link to="/explore">
        <h4 className="menu-item">Explore The Deck</h4>
      </Link>
      <Link to="/daily-reading">
        <h4 className="menu-item">Daily Reading</h4>
      </Link>
      <Link to="/3-card-spread">
        <h4 className="menu-item">3-Card Spread</h4>
      </Link>
    </Box>
  );

  return (
    <div>
      <span
        className="material-symbols-outlined menu"
        onClick={toggleDrawer("right", true)}
      >
        menu
      </span>
      <SwipeableDrawer
        anchor="right"
        open={state["right"]}
        onClose={toggleDrawer("right", false)}
        onOpen={toggleDrawer("right", true)}
      >
        {list()}
      </SwipeableDrawer>
    </div>
  );
}
