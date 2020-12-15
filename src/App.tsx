import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Context from "./Context";

import "./App.css";

import Essay from "./OpenEndedQuestion";
import { QuestionsContainer } from "./MultipleChoice";
import Home from "./Home";

function App() {
  return (
    <Context>
      <Router>
        <div className="App">
          <Switch>
            <Route path="/essay">
              <Essay />
            </Route>
            <Route path="/questions">
              <QuestionsContainer />
            </Route>

            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </Context>
  );
}

export default App;
