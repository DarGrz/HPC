import React from "react";
import image1 from "../images/ads/Baner.gif";

function AdBaner() {
  return (
    <td className="banerImage" colSpan="3">
      <img src={image1} />
    </td>
  );
}

export default AdBaner;
