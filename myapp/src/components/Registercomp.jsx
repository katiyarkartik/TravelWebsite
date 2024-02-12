import React, { useState } from "react";
import Otpcomp from "./Otpcomp";

const Registercomp = ({ updateAuth }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [signupErr, setSignupErr] = useState(1);
  const handleAuth = () => {
    updateAuth(1);
  };
  const handleSignup = () => {
    console.log(name);
    if (
      name === "" ||
      email === "" ||
      password === "" ||
      confirmPassword === ""
    ) {
      setError("One or more fields are missing");
    } else if (password !== confirmPassword) {
      setError("Passwords do not match");
    } else if (password.length < 8) {
      setError("Password should be a minimum of 8 characters");
    } else {
      setError("");
      setSignupErr(0);
      updateAuth(1);
    }
  };

  return (
    <div>
      <div className="loginform">
        <div className="auth-form-header">
          <h2>Join Us</h2>
        </div>
        <div className="name">
          <label htmlFor="">Name</label>
          <br />
          <input
            type="text"
            placeholder=""
            name=""
            className="auth-input"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="email-input input-box">
          <label htmlFor="">Email</label>
          <br />
          <input
            type="text"
            placeholder=""
            name=""
            className="auth-input"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="password-input">
          <label htmlFor="">Password</label>
          <br />
          <input
            type="text"
            placeholder=""
            className="auth-input"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="password-input">
          <label htmlFor="">Confirm Password</label>
          <br />
          <input
            type="password"
            placeholder=""
            className="auth-input"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
      </div>
      <div className="login-error-box">{error}</div>
      <button onClick={handleSignup} className="login-btn signup-btn">
        SignUp
      </button>
      {/* <Otpcomp email={email} /> */}

      <p style={{}}>
        Already have an account?{" "}
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
          Login
        </span>
      </p>
    </div>
  );
};

export default Registercomp;
