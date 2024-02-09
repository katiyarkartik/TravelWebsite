import React from "react";

const Registercomp = ({ updateAuth }) => {
  const handleAuth = () => {
    updateAuth(1);
  };
  const handleSignup = () => {};

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
            id=""
            className="auth-input"
          />
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
          <input type="text" placeholder="" className="auth-input" />
        </div>
        <div className="password-input">
          <label htmlFor="">Confirm Password</label>
          <br />
          <input type="password" placeholder="" className="auth-input" />
        </div>
      </div>
      <div className="login-error-box">One of the fields is missing.</div>
      <button onClick={handleSignup} className="login-btn signup-btn">
        SignUp
      </button>

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
