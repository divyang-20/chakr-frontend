import React from "react";
import UserBar from "../../../components/Common/UserBar";
import user2 from "../../../images/user2.png";
import user3 from "../../../images/user3.png";
import user4 from "../../../images/user4.png";
import user5 from "../../../images/user5.png";
import ArrowDown from "../../../images/arrow-down.png";
import ArrowBrown from "../../../images/arrow-brown.png";

const Customers = () => {
  return (
    <div className="customersContainer">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "5px",
        }}
      >
        <h2>Customers</h2>
        <div className="middleText">
          Sort by Newest
          <img
            src={ArrowDown}
            alt="arrow"
            height={20}
            width={20}
            style={{ marginLeft: "5px" }}
          />
        </div>
      </div>
      <UserBar
        name="Chris Friedkly"
        position="Supermarket Villanova"
        icon={user2}
      />
      <div style={{ backgroundColor: "#FFF7E8", borderRadius: "10px" }}>
        <UserBar
          name="Maggie Johnson"
          position="Oasis Organic Inc."
          icon={user3}
        />
      </div>
      <UserBar
        name="Gael Harry"
        position="New York Finest Fruits"
        icon={user4}
      />
      <UserBar name="Jenna Sullivan" position="Walmart" icon={user5} />
      <div className="middleText2">
        All customers
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

export default Customers;
