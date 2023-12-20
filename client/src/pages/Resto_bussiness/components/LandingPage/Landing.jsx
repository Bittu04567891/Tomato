import React from "react";
import "./Landing.css";
import Navbar from "../Navbar/Navbar";
import Box from "../Register_box/Box";

const Landing = () => {
  return (
    <div className="Cover_Restro">
      <div className="Restro_Lan">
        <Navbar />
        <img
          className="Restro_bg"
          alt="Lan"
          src="https://b.zmtcdn.com/mx-onboarding-hero87f77501659a5656cad54d98e72bf0d81627911821.webp"
        />
        <p className="top_p">
          Partner with TomatoEats <br />
          at 0% commission for the 1st month!
        </p>
        <p className="sub_p">
          And get ads worth INR 1500. Valid for new restaurant partners in
          select cities.
        </p>
        <span>
          <button className="blue_b">Register your restaurant</button>
          <button className="white_b">Login to view your restaurant</button>
        </span>
        <p className="sub_p2">
          Need help? Please email us at merchantonboarding@tomatoEats.com
        </p>
      </div>
      <Box />
    </div>
  );
};

export default Landing;
