import React from "react";
import { Link } from "react-router-dom";

import Login from "./Login";

function Home() {
  return (
    <header className="App-header">
      <Login />
      <Link to="/questions">Questions</Link>
    </header>
  );
}

export default Home;
