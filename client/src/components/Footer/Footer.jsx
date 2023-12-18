import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <section className="Logo">TomatoEats</section>
      <div className="About-Tomato">
        <h4>About TomatoEats</h4>
        <ul>
          <li>About Us</li>
          <li>Our Team</li>
          <li>Contact Us</li>
        </ul>
      </div>
      <div className="Tomaverse">
        <h4>TomatoVerse</h4>
        <ul>
          <li>Recipes</li>
          <li>Blog</li>
          <li>Community</li>
        </ul>
      </div>
      <div className="Restro">
        <h4>For Restaurants</h4>
        <ul>
          <li>Partner with Us</li>
          <li>Advertise</li>
          <li>Restaurant Dashboard</li>
        </ul>
      </div>
      <div className="Learn-More">
        <h4>Learn More</h4>
        <ul>
          <li>FAQs</li>
          <li>Terms of Service</li>
          <li>Privacy Policy</li>
        </ul>
      </div>
      <div className="Social-Links">
        <h4>Connect with Us</h4>
        <ul>
          <li>Facebook</li>
          <li>Twitter</li>
          <li>Instagram</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
