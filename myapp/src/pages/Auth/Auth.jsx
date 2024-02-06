import React, { useState } from "react";
import { Link } from "react-router-dom";
import Registercomp from "../../components/Registercomp";
import Logincomp from "../../components/Logincomp";


const Auth = ({ onUpdateValue }) => {
  

  const [auth, setauth] = useState(1);
  return (
    <div>
      Auth Page
      <br />
      <div className="auth-box">
        <div className="auth-selector">
          <button onClick={()=>setauth(1)}>Login</button>
          <button onClick={()=>setauth(0)}>Register</button>
        </div>
        {auth === 0 ? <Registercomp/> : <Logincomp onUpdateValue={onUpdateValue}/>}
      </div>
      
    </div>
  );
};

export default Auth;
