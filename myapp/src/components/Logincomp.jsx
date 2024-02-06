import React from "react";
import { Link } from "react-router-dom";
const Logincomp = ({onUpdateValue}) => {
  const handleLogin = () => {
    onUpdateValue(true);
  };
  return (
    <div>
      <input type="text" placeholder="username/email" name="" id="" />
      <input type="text" placeholder="password" />
      <Link to="/">
        <button onClick={handleLogin}>Login</button>
      </Link>
    </div>
  );
};

export default Logincomp;
