import React from "react";
import "../styles/CardGrid.css";
import Card from "./Card";
import roomsData from "../assets/data/ds";
import OwnerInfo from "./OwnerInfo";
const CardGrid = () => {
  return (
    <div className="card-grid container">
     
      {roomsData.map((room) => (
        <Card key={room.id} room={room} />
      ))}
     
    </div>
  );
};

export default CardGrid;
