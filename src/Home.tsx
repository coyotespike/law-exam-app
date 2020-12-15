import React from "react";
import { Link } from "react-router-dom";

import logo from "./logo.svg";
import Login from "./Login";

function Home() {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.js</code> and save to reload. And then do other stuff
      </p>
      <Login />
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
      <Link to="/questions">Questions</Link>
    </header>
  );
}

export default Home;
