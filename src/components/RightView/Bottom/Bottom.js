import React from "react";
import Chats from "./Chats";
import TopStates from "./TopStates";
import NewDeals from "./NewDeals";

const Bottom = () => {
  return (
    <div style={{ display: "flex" }}>
      <Chats />
      <TopStates />
      <NewDeals />
    </div>
  );
};

export default Bottom;
