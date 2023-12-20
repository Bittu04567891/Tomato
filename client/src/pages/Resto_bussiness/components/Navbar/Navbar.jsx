import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="Restro_nav">
      <ul className="restro_ul">
        <li className="restro_li">Advertise</li>
        <li className="restro_li">
          <button className="login_restro">Login</button>
        </li>
        <li className="restro_li">
          <button className="create_restro">Create Account</button>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
