import React from "react";
import { VersusButton } from "./ui";
import "./VersusContainer.css";

function VersusContainer(props) {
  return (
    <table>
      <tbody>
        <tr>
          <th onClick={props.onClick}>
            <VersusButton>Zubadan vs Eco Inverter</VersusButton>
          </th>
        </tr>
      </tbody>
    </table>
  );
}

export default VersusContainer;
