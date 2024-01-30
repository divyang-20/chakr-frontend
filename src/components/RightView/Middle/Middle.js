import React from "react";
import Customers from "./Customers";
import Growth from "./Growth";

const Middle = () => {
  return (
    <div
      style={{
        display: "flex",
        marginBottom: "15px",
        justifyContent: "space-between",
      }}
    >
      <Customers />
      <Growth />
    </div>
  );
};

export default Middle;
