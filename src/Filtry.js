import React from "react";

function Filtry(props) {
  return (
    <section className="filtry">
      <input
        type="text"
        name="filtr"
        onChange={props.handleFiltr}
        value={props.filtr}
      />
    </section>
  );
}

export default Filtry;
