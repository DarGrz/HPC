import React, { Fragment } from "react";

import classes from "./PumpTable.module.css";

function PumpTable(props) {
  return (
    <Fragment className={classes.pumpTable}>
      <tr className={(classes.margint, classes.pumpImage)}>
        <th>Zdjęcie: </th>
        <td className="center">
          <img
            src={props.pump.image}
            alt={`Zdjęcie pompy: &{props.pump.producent}`}
          ></img>
        </td>
        <td className="center">
          {props.pump2 && (
            <img
              src={props.pump2.image}
              alt={`Zdjęcie pompy: ${props.pump2.producent}`}
            ></img>
          )}
        </td>
      </tr>
      <tr className="tr_header">
        <th colSpan="3">
          <h3>Podstawowe informacje</h3>
        </th>
      </tr>
      {/* {props.pump2 && (
        <tr>
          <th>Średnia cena z montażem BRUTTO (VAT 8%): </th>
          <td>{props.pump.insprice} PLN</td>
          <td>{props.pump2.insprice} PLN</td>
        </tr>
      )} */}
      <tr>
        <th>Producent i model: </th>
        <td>
          {props.pump.producent} {props.pump.models}
        </td>
        <td>
          {props.pump2.producent} {props.pump2.models}
        </td>
      </tr>
      <tr>
        <th>Seria: </th>
        <td>{props.pump.pn}</td>
        <td>{props.pump2.pn}</td>
      </tr>
      <tr>
        <th>Moc: (kW) </th>
        <td>{props.pump.power}</td>
        <td>{props.pump2.power}</td>
      </tr>
      <tr>
        <th>Typ: </th>
        <td>{props.pump.type}</td>
        <td>{props.pump2.type}</td>
      </tr>
      <tr>
        <th>Gwarancja: </th>
        <td>{props.pump.guar}</td>
        <td>{props.pump2.guar}</td>
      </tr>
      {/* <tr>
        <th>Karta doboru: </th>
        <td>{props.pump.matcard}</td>
        <td>{props.pump2.matcard}</td>
      </tr> */}
      {/* <tr>
        <th>Sprężarka: </th>
        <td>{props.pump.compressor}</td>
        <td>{props.pump2.compressor}</td>
      </tr> */}
      <tr>
        <th>Roczne zużycie energii [kWh] dla temperatury 55°C</th>
        <td>{props.pump.yearpowusage}</td>
        <td>{props.pump2.yearpowusage}</td>
      </tr>

      <tr></tr>

      <tr className="tr_header">
        <th colSpan="3">
          <h3>Parametry</h3>
        </th>
      </tr>
      <tr>
        <th>Zailanie (V | faza | Hz): </th>
        <td>{props.pump.phases}</td>
        <td>{props.pump2.phases}</td>
      </tr>
      <tr>
        <th>Czynnik: </th>
        <td>{props.pump.factor}</td>
        <td>{props.pump2.factor}</td>
      </tr>
      <tr>
        <th>Wymiary (mm): </th>
        <td>{props.pump.sizemm}</td>
        <td>{props.pump2.sizemm}</td>
      </tr>
      <tr>
        <th>Waga (kg): </th>
        <td>{props.pump.weight}</td>
        <td>{props.pump2.weight}</td>
      </tr>
      <tr>
        <th>Maksymalna głośność (dB):</th>
        <td>{props.pump.db}</td>
        <td>{props.pump2.db}</td>
      </tr>
      <tr>
        <th>Maksymalna temp. zasilania (℃): </th>
        <td>{props.pump.makstemp}</td>
        <td>{props.pump2.makstemp}</td>
      </tr>
      {props.pump2 && (
        <tr>
          <th>Klasa energetyczna 55℃ / 55℃: </th>
          <td>
            {props.pump.pefficinecy35} / {props.pump.pefficiency55}
          </td>
          <td>
            {props.pump2.pefficinecy35} / {props.pump2.pefficiency55}
          </td>
        </tr>
      )}
      {props.pump2 && (
        <tr>
          <th>Moc nominalna 35℃ / 55℃ (kW): </th>
          <td>
            {props.pump.nominal35} / {props.pump.nominal55}
          </td>
          <td>
            {props.pump2.nominal35} / {props.pump2.nominal55}
          </td>
        </tr>
      )}
      <tr>
        <th>Moc przy -10℃ / temp.wody 35℃ (kW): </th>
        <td>{props.pump.maksmin10w35}</td>
        <td>{props.pump2.maksmin10w35}</td>
      </tr>
      <tr>
        <th>Moc przy -15℃ / temp.wody 35℃ (kW): </th>
        <td>{props.pump.makmin15w35}</td>
        <td>{props.pump2.makmin15w35}</td>
      </tr>
      <tr>
        <th>Zakres pracy grzania temp. zew. (℃): </th>
        <td>{props.pump.heatingrange}</td>
        <td>{props.pump2.heatingrange}</td>
      </tr>
      <tr>
        <th>Zakres pracy grzania CWU temp. zew. (℃): </th>
        <td>{props.pump.heatcwurange}</td>
        <td>{props.pump2.heatcwurange}</td>
      </tr>
      <tr>
        <th>Moc chłodzenia (kW): </th>
        <td>{props.pump.coolpow}</td>
        <td>{props.pump2.coolpow}</td>
      </tr>

      <tr>
        <th>Zakres pracy chłodzenia temp. zew. (℃): </th>
        <td>{props.pump.coolrange}</td>
        <td>{props.pump2.coolrange}</td>
      </tr>

      <tr className="tr_header">
        <th colSpan="3">
          <h3>Dane montażowe</h3>
        </th>
      </tr>

      <tr>
        <th>Przewód zasilający: </th>
        <td>{props.pump.powercord}</td>
        <td>{props.pump2.powercord}</td>
      </tr>

      <tr>
        <th>Bezpiecznik (A): </th>
        <td>{props.pump.safety}</td>
        <td>{props.pump2.safety}</td>
      </tr>
      <tr>
        <th>Przyłącza chłodznicze (ciecz/gaz) (cale):</th>
        <td>{props.pump.coolconnect}</td>
        <td>{props.pump2.coolconnect}</td>
      </tr>
      <tr>
        <th>Mak. długość instalacji (m):</th>
        <td>{props.pump.maxinstlength}</td>
        <td>{props.pump2.maxinstlength}</td>
      </tr>
      <tr>
        <th>Mak. różnica poziomów (m):</th>
        <td>{props.pump.maxheigtdist}</td>
        <td>{props.pump2.maxheigtdist}</td>
      </tr>
      <tr>
        <th>Ilość czynnika chłodzącego (kg):</th>
        <td>{props.pump.coolantamount}</td>
        <td>{props.pump2.coolantamount}</td>
      </tr>
      <tr>
        <th>Ekwiwalent CO2 (kg):</th>
        <td>{props.pump.coeqwi}</td>
        <td>{props.pump2.coeqwi}</td>
      </tr>
      <tr>
        <th>Maksymalna ilość czynnika chłodzącego (kg):</th>
        <td>{props.pump.maxcoeqw}</td>
        <td>{props.pump2.maxcoeqw}</td>
      </tr>
      <tr>
        <th>Maksymalny ekwiwalent CO2 (ton):</th>
        <td>{props.pump.maxeqwco2}</td>
        <td>{props.pump2.maxeqwco2}</td>
      </tr>
      {props.pump2 && (
        <tr>
          <th>Katalog produktu:</th>
          <td>
            <a href={props.pump.catalog}>Link do katalogu</a>
          </td>
          <td>
            <a href={props.pump2.catalog}>Link do katalogu </a>
          </td>
        </tr>
      )}
    </Fragment>
  );
}

export default PumpTable;
