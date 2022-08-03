import Select from "react-select";
import React, { Fragment, useState } from "react";
import { Products } from "./data";
import "./SelectPumps.css";

function SelectPumps() {
  const [pump, setPump] = useState("");
  const [mitsuImage, setMitsuImage] = useState("");
  const onSelectPump = (e) => {
    const SelectedID = e.id;
    const SelectedPump = Products.filter((d) => d.id == SelectedID)[0];
    setPump(SelectedPump);
  };

  return (
      <Select
        onChange={(e) => {
          onSelectPump(e);
        }}
        className="select1"
        placeholder="Wybierz pompę..."
        getOptionLabel={(option) =>
          `${option.producent} ${option.models} ${option.power} kW ${option.pn}`
        }
        getOptionValue={(option) => `${option.id}`}
        options={Products}
      />
      {pump && (
        <div>
          <h1>
            {pump.producent} {pump.models} {pump.power} kW {pump.pn}
          </h1>
          <img className="pump-image" src={pump.image}></img>
        </div>
      )}
  );
}

export default SelectPumps;
