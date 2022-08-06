import React from "react";
import Navigation from "./components/Navigation/Navigation.js";
import Routes from "./components/Routes/Routes.js";
import "./App.scss";
import { Footer } from "./components/Footer/Footer.js";

const App = () => {
  return (
    <main className="App">
      <Navigation />
      <Routes />
      <Footer />
    </main>
  );
};
export default App;
