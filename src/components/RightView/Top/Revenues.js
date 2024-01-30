import React from "react";
import ArrowGreen from "../../../images/arrow-green.png";
import ArrowBrown from "../../../images/arrow-brown.png";

const Revenues = () => {
  return (
    <div className="revenuesContainer">
      <h2>Revenues</h2>
      <div className="revenuesPercent">
        15%
        <img
          src={ArrowGreen}
          alt="arrow"
          height={20}
          width={20}
          style={{ marginLeft: "15px" }}
        />
      </div>
      <div className="normalText">Increase compared to last week</div>
      <div className="topText">
        Revenues Report
        <img
          src={ArrowBrown}
          alt="arrow"
          height={20}
          width={20}
          style={{ marginLeft: "5px" }}
        />
      </div>
    </div>
  );
};

export default Revenues;
