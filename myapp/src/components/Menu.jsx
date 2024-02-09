import React from "react";
import "../styles/Menu.css";
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
