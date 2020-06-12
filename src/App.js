import React from 'react';
import './App.css';
import Players from './Players.js';
import Welcome from "./Welcome.js";
import Teams from "./Teams.js";
import Words from "./Words.js";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/players" component={Players} />
          <Route path="/" exact component={Welcome} />
          <Route path="/teams" component={Teams} />
          <Route path="/words" component={Words} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
