import React from "react";
import user3 from "../../../../images/user3.png";

const Buyer = () => {
  return (
    <div className="buyerConatiner">
      <div className="growthNormalText">Top Buyer</div>
      <div style={{ marginTop: "10px" }}>
        <img src={user3} alt="user2" height={30} width={30} />
        <h3 style={{ lineHeight: 0, marginTop: "10px" }}>Maggie Johnson</h3>
        <div>Oasis Organic Inc.</div>
      </div>
    </div>
  );
};

export default Buyer;
