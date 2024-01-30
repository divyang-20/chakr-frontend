import React from "react";
import Revenues from "./Revenues";
import LostDeals from "./LostDeals";
import QuarterGoal from "./QuarterGoal";

const Top = () => {
  return (
    <div style={{ display: "flex", marginBottom: "15px" }}>
      <Revenues />
      <LostDeals />
      <QuarterGoal />
    </div>
  );
};

export default Top;
