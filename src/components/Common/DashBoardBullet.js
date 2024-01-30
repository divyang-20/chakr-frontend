import React from "react";

const DashBoardBullet = (props) => {
  return (
    <div style={{ display: "flex", alignItems: "center", marginTop: "-10px" }}>
      <img src={props.icon} alt={props.title} height={20} width={20} />
      <p
        style={{
          marginLeft: "8px",
          fontSize: "20px",
          color: props.color ? props.color : "#131313",
        }}
      >
        {props.title}
      </p>
    </div>
  );
};

export default DashBoardBullet;
