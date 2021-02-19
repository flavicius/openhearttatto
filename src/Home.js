import React from "react";
import Tateri from "./Tateri";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <h1>Najdi svého tatéra</h1>
      <Link to="/about">O projektu</Link>
      <Tateri />
    </div>
  );
}

export default Home;
