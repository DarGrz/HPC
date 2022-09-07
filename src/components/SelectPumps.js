import Select from "react-select";
import React, { Fragment, useState } from "react";
import PumpTable from "./PumpTable";
import backgroundMainBaner from "../images/bgs/family-two-kids.png";
import Baner from "./layouts/Baner";
import CardsBox from "./card/CardsBox";
import { Products } from "./data";
import "./SelectPumps.css";

function SelectPumps(props) {
  const [pump, setPump] = useState("");
  const [pump2, setPump2] = useState("");

  // Heat pumps selectors
  const onSelectPump = (e) => {
    const SelectedID = e.id;
    const SelectedPump = Products.filter((d) => d.id === SelectedID)[0];
    setPump(SelectedPump);
  };

  const onSelectPump2 = (e) => {
    const SelectedID2 = e.id;
    const SelectedPump2 = Products.filter((d) => d.id === SelectedID2)[0];
    setPump2(SelectedPump2);
  };

  // Heat pumps most popular comparisions
  // const onVersusSelect = () => {
  //   const SelectedPump1 = Products.filter((d) => d.id === 8)[0];
  //   const SelectedPump2 = Products.filter((d) => d.id === 2)[0];

  //   setPump(SelectedPump1);
  //   setPump2(SelectedPump2);
  // };

  return (
    <Fragment>
      <table>
        <tbody>
          <tr>
            <th className="baner" colSpan={3}>
              <Baner />
            </th>
          </tr>

          <tr>
            <th
              colSpan={3}
              style={{ textAlign: "center", textTransform: "uppercase" }}
            >
              <h1>Porównywarka Pomp Ciepła</h1>
            </th>
          </tr>
          <tr>
            <th>
              <CardsBox />
            </th>
          </tr>
          <tr className="marginb media">
            <th className="th_select_header">WYBÓR URZĄDZENIA:</th>
            <td>
              <Select
                onChange={(e) => {
                  onSelectPump(e);
                }}
                className="select1"
                placeholder="(A) Wybierz pompę ciepła..."
                getOptionLabel={(option) =>
                  ` ${option.producent} ${option.models} ${option.power} kW ${option.pn}`
                }
                getOptionValue={(option) => `${option.id}`}
                options={Products}
              />
            </td>
            <td>
              <Select
                onChange={(e) => {
                  onSelectPump2(e);
                }}
                className="select2"
                placeholder="(B) Wybierz pompę ciepła..."
                getOptionLabel={(option) =>
                  ` ${option.producent} ${option.models} ${option.power} kW ${option.pn}`
                }
                getOptionValue={(option) => `${option.id}`}
                options={Products}
              />
            </td>
          </tr>
          {pump && <PumpTable pump={pump} pump2={pump2} />}
        </tbody>
      </table>
    </Fragment>
  );
}

export default SelectPumps;
