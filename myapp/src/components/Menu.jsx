import React from "react";
import "./Menu.css";
const Menu = ({ onUpdateValue }) => {
  const handleLogout = () => {
    onUpdateValue(false);
  };
  return (
    <div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Menu;
