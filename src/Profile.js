import React from "react";
import { Link, useParams } from "react-router-dom";
import TaterProfile from "./TaterProfile";
import TateriData from "./TateriData";

function Profile() {
  const { id } = useParams();
  const tater = TateriData.find((tater) => tater.id == id);

  return (
    <div className="home">
      <h1>{tater.name}</h1>
      <TaterProfile tater={tater} />
      <Link to="/">Domů</Link>
    </div>
  );
}

export default Profile;
