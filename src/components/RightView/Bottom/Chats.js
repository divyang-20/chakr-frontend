import React from "react";
import user2 from "../../../images/user2.png";
import user3 from "../../../images/user3.png";
import user4 from "../../../images/user4.png";
import user5 from "../../../images/user5.png";

const Chats = () => {
  return (
    <div className="chatsContainer">
      <h2>Chats</h2>
      <div className="normalText">2 unread messages</div>
      <div
        style={{
          display: "flex",
          margin: "35px 10px",
          justifyContent: "space-between",
        }}
      >
        <img src={user2} alt="user2" height={40} width={40} />
        <img src={user3} alt="user3" height={40} width={40} />
        <img src={user4} alt="user4" height={40} width={40} />
        <img src={user5} alt="user5" height={40} width={40} />
      </div>
    </div>
  );
};

export default Chats;
