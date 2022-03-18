import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./Header";
import Profile from "./Home/Profile"
import Projects from "./Projects/Projects"
import Links from "./Links";

function App() {
    return (
      <div>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              <Profile />
            </Route>
            <Route exact path="/Projects">
              <Projects />
            </Route>
            <Route exact path="/Links">
              <Links />
            </Route>
          </Switch>
        </Router>
      </div>
    );   
}

export default App;