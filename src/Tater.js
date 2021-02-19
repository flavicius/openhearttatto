import React from "react";
import { Link } from "react-router-dom";
import Tatto from "./Tatto";

function Tater(props) {
  function handleConsultation() {
    let phoneNumber = prompt("Zadejte telefonní číslo:", "");
    if (phoneNumber) {
      alert("Výroborně! Brzy se vám ozveme <3");
    } else {
      alert("Zadané číslo je špatné");
    }
  }

  return (
    <div className="tater">
      <img src={props.tater.photo} alt="" />
      <h2>{props.tater.name}</h2>
      <p>
        <Link to={`/profile/${props.tater.id}`}>Detail</Link>
      </p>
      <p>{props.tater.location}</p>
      <p>{props.tater.bio}</p>
      <div className="tattos">
        {props.tater.tattos.map((tatto) => (
          <Tatto img={tatto.img} />
        ))}
      </div>
      <button onClick={handleConsultation}>Domluvit konzultaci</button>
    </div>
  );
}

export default Tater;
