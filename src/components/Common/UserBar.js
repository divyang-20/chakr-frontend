import React from "react";

const UserBar = (props) => {
  return (
    <div style={{ display: "flex", alignItems: "center", padding: "20px 0" }}>
      <img src={props.icon} alt={props.name} height={35} width={35} />
      <div>
        <div style={{ marginLeft: "8px", fontSize: "20px" }}>{props.name}</div>
        <div style={{ marginLeft: "8px", fontSize: "16px" }}>
          {props.position}
        </div>
      </div>
    </div>
  );
};

export default UserBar;
