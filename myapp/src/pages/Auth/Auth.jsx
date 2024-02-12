import React, { useState } from "react";
import { Link } from "react-router-dom";
import Registercomp from "../../components/Registercomp";
import Logincomp from "../../components/Logincomp";
import { CiTimer } from "react-icons/ci";
import authImage from "../../assets/images/authImg4.jpg";
import "./Auth.css";
const Auth = ({ onUpdateValue }) => {
  const [auth, setauth] = useState(1);
  const updateAuth = (value) => {
    console.log(auth);
    setauth(value);
  };
  return (
    <div className="auth">
      <div className="auth-left">
        <img src={authImage} alt="" />
      </div>
      <div className="auth-box">
        <li className="logo">
          <CiTimer />
          IndoTravel
        </li>
        <div className="auth-container">
          <div className="auth-selector">
         
          </div>
          <div className="auth-form">
            {" "}
            {auth === 0 ? (
              <Registercomp updateAuth={updateAuth} />
            ) : (
              <Logincomp
                onUpdateValue={onUpdateValue}
                updateAuth={updateAuth}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
