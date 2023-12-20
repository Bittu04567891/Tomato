// How.jsx
import React from "react";
import "./How.css"; // Import your stylesheet

const How = () => {
  return (
    <div className="how_cont">
      <h1>How it Works?</h1>
      <div className="how-container">
        <div className="how-box">
          <img
            src="https://b.zmtcdn.com/merchant-onboarding/ecb5e086ee64a4b8b063011537be18171600699886.png"
            alt="Step 1 Icon"
          />
          <h3>Step 1</h3>
          <p>Create your page on TomatoEats</p>
          <p>Help users discover your place by creating a listing on Zomato</p>
        </div>

        <div className="how-box">
          <img
            src="https://b.zmtcdn.com/merchant-onboarding/71d998231fdaeb0bffe8ff5872edcde81600699935.png"
            alt="Step 2 Icon"
          />
          <h3>Step 2</h3>
          <p>Register for online ordering</p>
          <p>And deliver orders to millions of customers with ease</p>
        </div>

        <div className="how-box">
          <img
            src="https://b.zmtcdn.com/merchant-onboarding/efdd6ac0cd160a46c97ad58d9bbd73fd1600699950.png"
            alt="Step 3 Icon"
          />
          <h3>Step 3</h3>
          <p>Start receiving orders online</p>
          <p>
            Manage orders on our partner app, web dashboard, or API partners
          </p>
        </div>
      </div>
    </div>
  );
};

export default How;
