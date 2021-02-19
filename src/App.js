import "./styles.css";
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Profile from "./Profile";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/profile/:id">
            <Profile />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
