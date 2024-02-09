import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Logincomp.css";
const Logincomp = ({ onUpdateValue, updateAuth }) => {
  const handleLogin = () => {
    onUpdateValue(true);
  };
  const handleAuth = () => [
    updateAuth(0)
    
  ]
  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => {};
  return (
    <div className="loginform">
      <div className="auth-form-header">
        <h2>Login</h2>
      </div>
      <div className="email-input input-box">
        <label htmlFor="">Email</label>
        <br />
        <input
          type="text"
          placeholder=""
          name=""
          id=""
          className="auth-input"
        />
      </div>

      <div className="password-input">
        <label htmlFor="">Password</label>
        <br />
        <input
          type={showPassword ? "text" : "password"}
          placeholder=""
          className="auth-input"
        />
        <div className="show-password">
          <input
            type="checkbox"
            onChange={() => setShowPassword(!showPassword)}
          />
          <p>Show Password</p>
        </div>
        <div className="login-error-box">One of the fields is missing.</div>
      </div>

      <Link to="/">
        <button onClick={handleLogin} className="login-btn">
          Login
        </button>
      </Link>
      <>
        <p style={{}}>
          Don't have an account ?{" "}
          <span
            style={{
              textDecoration: "underline",
              textUnderlineOffset: "5px",
              cursor: "pointer",
              color: "#33A8FF",
              fontWeight: "700",
            }}
            onClick={handleAuth}
          >
            SignUp
          </span>
        </p>
      </>
    </div>
  );
};

export default Logincomp;
