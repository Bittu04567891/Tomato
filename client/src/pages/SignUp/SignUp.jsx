// SignUp.jsx
import React, { useState } from "react";
import "./SignUp.css"; // Import your stylesheet

const SignUp = () => {
  const [agreeTerms, setAgreeTerms] = useState(false);

  const handleCheckboxChange = () => {
    setAgreeTerms(!agreeTerms);
  };

  return (
    <div className="signup-container">
      <div className="signup-form-box">
        <h2 className="signup-heading">Sign Up for Your Account</h2>
        <form className="signup-form">
          <label htmlFor="email" className="signup-label">
            Name:
          </label>
          <input
            type="name"
            id="name"
            name="name"
            className="signup-input"
            placeholder="Enter your name"
            required
          />
          <label htmlFor="Phone No" className="signup-label">
            Phone No:
          </label>
          <input
            type="Phone"
            id="Phone"
            name="Phone"
            className="signup-input"
            placeholder="Enter your Phone No"
            required
          />
          <label htmlFor="email" className="signup-label">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="signup-input"
            placeholder="Enter your email"
            required
          />

          <label htmlFor="password" className="signup-label">
            Password:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="signup-input"
            placeholder="Enter your password"
            required
          />

          <div className="signup-checkbox">
            <input
              type="checkbox"
              id="termsCheckbox"
              checked={agreeTerms}
              onChange={handleCheckboxChange}
            />
            <label htmlFor="termsCheckbox">
              I agree with terms and conditions
            </label>
          </div>

          <button
            type="submit"
            className="signup-button"
            disabled={!agreeTerms}
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
