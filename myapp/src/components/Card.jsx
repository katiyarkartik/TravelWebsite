import React from "react";
import "../styles/Card.css";
import OwnerInfo from "./OwnerInfo";
const Card = ({ room }) => {
  return (
    <div className="card">
      <div className="card-img">
        <img src={room.image} alt="" />
        {/* <div className="owner">
          <div className="owner-img">
            <img
              src="https://media.istockphoto.com/id/1329936184/photo/head-shot-portrait-of-smiling-businesswoman-intern-looking-at-camera.webp?b=1&s=170667a&w=0&k=20&c=MCbv5iIu9hUd3tFVP-UP_gx4BrvXqfUD5lzNpBL9P7g="
              alt=""
            />




                      
          </div>
        </div> */}
        <OwnerInfo room={room} />
      </div>
      <div className="card-text">
        <div className="name">{room.name}</div>
        <div className="info">{room.info} </div>
        <div className="price">{room.price}</div>
      </div>
    </div>
  );
};

export default Card;
