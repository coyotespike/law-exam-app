import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Context from "./Context";

import "./App.css";

import QuestionsContainer from "./Quiz";
import Home from "./Home";

function App() {
  return (
    <Router>
      <Context>
        <div className="App">
          <Switch>
            <Route path="/questions">
              <QuestionsContainer />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Context>
    </Router>
  );
}

export default App;
