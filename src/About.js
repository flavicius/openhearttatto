import React from "react";
import { Link, Switch, Route } from "react-router-dom";

function About() {
  return (
    <div className="home">
      <h1>O projektu</h1>
      <p>Nějaký popis projektu :)</p>
      <Link to="/">Domů</Link>
      <Link to="/about/me">O zakladatelce</Link>

      <Switch>
        <Route path="/about/me">
          <div>
            <h1>O zakladatelce</h1>
            <Link to="/">Domů</Link>
          </div>
        </Route>
      </Switch>
    </div>
  );
}

export default About;
