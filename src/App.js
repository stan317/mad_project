import React from 'react';
import './App.css';
import Players from './pages/Players.js';
import Welcome from "./pages/Welcome.js";
import Teams from "./pages/Teams.js";
import Words from "./pages/Words.js";
import Game from "./pages/Game.js";
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
          <Route path="/game" component={Game} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
