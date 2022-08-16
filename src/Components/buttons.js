import React from "react";
import { Link } from "react-router-dom";
import * as Icons from "react-icons/fa";


function Buttons() {
  return (
    <>
    <Link to="signup">
        
          <span className="login-btn">login</span>
 
      </Link>

      <Link to="signup">
        <button className="btn">
          <Icons.FaUserPlus />
          <span>Register</span>
        </button>
      </Link>
    </>
  );
}


export default Buttons;