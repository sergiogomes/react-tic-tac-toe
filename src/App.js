import React from "react";

import logo from "./logo.svg";
import Tiles from "./Tiles";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="App-title">Tic Tac Toe</p>
      </header>
      <div className="container">
        <Tiles />
      </div>
    </div>
  );
};

export default App;
