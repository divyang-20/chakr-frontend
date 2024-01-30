import React from "react";
import quarterGoal from "../../../images/quarterGoal.png";
import ArrowBrown from "../../../images/arrow-brown.png";

const QuarterGoal = () => {
  return (
    <div className="quarterGoalContainer">
      <h2>Quarter goal</h2>
      <img
        src={quarterGoal}
        alt="goal"
        height="36%"
        width="100%"
        style={{ marginTop: "24px" }}
      />
      <div className="topText">
        All goals
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

export default QuarterGoal;
