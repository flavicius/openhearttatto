import React, { useEffect, useState } from "react";
import TateriData from "./TateriData";
import Filtry from "./Filtry";
import Tater from "./Tater";

function Tateri() {
  let [tateriList, setTateriList] = useState(TateriData);
  let [filtr, setFiltr] = useState("");

  function handleFiltr(event) {
    let { value } = event.target;
    setFiltr(value);
  }

  useEffect(() => {
    setTateriList(
      TateriData.filter((tater) => {
        let result = false;
        result = tater.name.toLowerCase().includes(filtr.toLowerCase());
        if (!result)
          result = tater.bio.toLowerCase().includes(filtr.toLowerCase());
        if (!result)
          result = tater.location.toLowerCase().includes(filtr.toLowerCase());
        return result;
      })
    );
  }, [filtr]);

  return (
    <div>
      <Filtry handleFiltr={handleFiltr} filtr={filtr} />
      <section className="tateri">
        {tateriList.map((tater) => (
          <Tater tater={tater} />
        ))}
      </section>
    </div>
  );
}

export default Tateri;
