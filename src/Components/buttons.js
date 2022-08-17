import React from "react";
import { Link } from "react-router-dom";
import * as Icons from "react-icons/fa";


function Buttons({Hamburger}) {
  return (
    <>
    <Link to="./signin">
        
          <span className="login-btn" onClick={Hamburger}>login</span>
 
      </Link>

      <Link to="./signup">
        <button className="btn" onClick={Hamburger}>
          <Icons.FaUserPlus />
          <span>Register</span>
        </button>
      </Link>
    </>
  );
}


export default Buttons;