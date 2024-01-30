import React from "react";
import UserBar from "../Common/UserBar";
import DashBoardBullet from "../Common/DashBoardBullet";
import Icon from "../../images/icon.png";
import SearchIcon from "../../images/search_icon.png";
import dashboard from "../../images/dashboard.png";
import customers from "../../images/customers.png";
import allreports from "../../images/allreports.png";
import geography from "../../images/geography.png";
import conversations from "../../images/conversations.png";
import deals from "../../images/deals.png";
import exports from "../../images/export.png";
import settings from "../../images/settings.png";
import logout from "../../images/logout.png";
import user1 from "../../images/user1.png";

const Dashboard = () => {
  return (
    <div className="leftViewContainer">
      <div style={{ display: "flex", alignItems: "center" }}>
        <img src={Icon} alt="icon" height={25} width={25} />
        <h2 style={{ marginLeft: "10px" }}>OrangeFarm</h2>
      </div>
      <div style={{ margin: "20px 0" }}>
        <img
          src={SearchIcon}
          alt="search_icon"
          style={{
            position: "absolute",
            left: "50px",
            top: "19%",
            width: "18px",
            height: "18px",
          }}
        />
        <input type="text" placeholder="Search" className="inputBox" />
      </div>
      <div style={{ marginBottom: "40vh" }}>
        <DashBoardBullet title="Dashboard" icon={dashboard} />
        <DashBoardBullet title="Customers" icon={customers} />
        <DashBoardBullet title="All reports" icon={allreports} />
        <DashBoardBullet title="Geography" icon={geography} />
        <DashBoardBullet title="Conversations" icon={conversations} />
        <DashBoardBullet title="Deals" icon={deals} />
        <DashBoardBullet title="Export" icon={exports} />
      </div>
      <UserBar name="Gustavo Xavier" position="Admin" icon={user1} />
      <DashBoardBullet title="Settings" icon={settings} />
      <DashBoardBullet title="Log out" icon={logout} color="red" />
    </div>
  );
};

export default Dashboard;
