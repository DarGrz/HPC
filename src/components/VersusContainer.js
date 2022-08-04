import React from "react";
import "./VersusContainer.css";

function VersusContainer(props) {
  return (
    <table>
      <tbody>
        <tr>
          <th onClick={props.onClick}>Zubadan VS Eco Inverter</th>
        </tr>
      </tbody>
    </table>
  );
}

export default VersusContainer;
