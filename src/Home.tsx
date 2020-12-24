import React from "react";
import { Link } from "react-router-dom";

import Login from "./Login";

import Gallery from "./Gallery";

function Home() {
  return (
    <header className="App-header">
      <Login />
      <Link to="/questions">Questions</Link>
      <Gallery />
    </header>
  );
}

export default Home;
