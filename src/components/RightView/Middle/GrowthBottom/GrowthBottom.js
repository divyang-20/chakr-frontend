import React from "react";
import Month from "./Month";
import Year from "./Year";
import Buyer from "./Buyer";

const GrowthBottom = () => {
  return (
    <div style={{ display: "flex" }}>
      <Month />
      <Year />
      <Buyer />
    </div>
  );
};

export default GrowthBottom;
