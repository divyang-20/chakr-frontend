import React from "react";
import dealImage from "../../../images/dealImage.png";

const DealCard = (props) => {
  return (
    <div className="dealsCard">
      <img src={dealImage} alt="dealimg" height={20} width={20} />
      <div
        style={{
          marginLeft: "8px",
          fontSize: "20px",
          color: "#734A00",
        }}
      >
        {props.title}
      </div>
    </div>
  );
};

const NewDeals = () => {
  return (
    <div className="newDealsContainer">
      <h2>New deals</h2>
      <div className="dealsGrid">
        <DealCard title="Fruit2Go" />
        <DealCard title="Marshall's MKT" />
        <DealCard title="CCNT" />
        <DealCard title="Joana Mini-market" />
        <DealCard title="JLittle Brazil Vegan" />
      </div>
    </div>
  );
};

export default NewDeals;
