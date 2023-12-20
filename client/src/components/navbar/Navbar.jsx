import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="Navbar">
      <ul className="ul-nav">
        <li className="li-nav">Add Restaurant</li>
        <li className="li-nav">Log in</li>
        <li className="li-nav">Sign up</li>
      </ul>
    </div>
  );
};

export default Navbar;
