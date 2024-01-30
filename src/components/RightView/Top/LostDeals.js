import React from "react";
import ArrowBrown from "../../../images/arrow-brown.png";

const LostDeals = () => {
  return (
    <div className="lostDealsContainer">
      <h2>Lost deals</h2>
      <div className="revenuesPercent">4%</div>
      <div className="normalText">You closed 96 out of 100 deals</div>
      <div className="topText">
        All deals
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

export default LostDeals;
