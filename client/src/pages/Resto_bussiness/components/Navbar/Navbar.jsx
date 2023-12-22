import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="Restro_nav">
      <ul className="restro_ul">
        <Link to="/" className="li-nav1">
          {" "}
          <li className="restro_li">
            <i class="fa-solid fa-house"></i>
          </li>
        </Link>
        <li className="restro_li">Advertise</li>
        <Link to="/login">
          {" "}
          <li className="restro_li">
            <button className="login_restro">Login</button>
          </li>
        </Link>
        <Link to="/SignUp">
          {" "}
          <li className="restro_li">
            <button className="create_restro">Create Account</button>
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
