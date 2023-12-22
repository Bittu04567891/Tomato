import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="Navbar">
      <ul className="ul-nav">
        <Link to="/Restaurant" className="li-nav1">
          <li className="li-nav">Add Restaurant</li>
        </Link>
        <Link to="/Login" className="li-nav1">
          <li className="li-nav">Log in</li>
        </Link>
        <Link to="/SignUp" className="li-nav1">
          <li className="li-nav">Sign up</li>
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
