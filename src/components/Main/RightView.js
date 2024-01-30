import React from "react";
import Top from "../RightView/Top/Top";
import Middle from "../RightView/Middle/Middle";
import Bottom from "../RightView/Bottom/Bottom";

const RightView = () => {
  return (
    <div className="rightViewContainer">
      <Top />
      <Middle />
      <Bottom />
    </div>
  );
};

export default RightView;
