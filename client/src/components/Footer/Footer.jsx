import React, { useState } from "react";
import "./footer.css";
import { useAppContext } from "../../Context/AppContext";

const Footer = () => {
  const [selectedCountry, setSelectedCountry] = useState("India");
  const [selectedLanguage, setSelectedLanguage] = useState("English");
  const { selectedno, setSelectedno } = useAppContext();

  const handleCountryChange = (country) => {
    setSelectedCountry(country);
  };

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
  };
  const handlenoChange = (l) => {
    console.log("Selected number:", l);
    setSelectedno(l);
  };
  const data = [
    {
      no: 1,
      name: "india",
      key: "in",
      url: "./images/india.png",
    },
    {
      no: 2,
      name: "UAE",
      key: "ae",
      url: "./images/uae.png",
    },
  ];
  return (
    <div className="footer">
      <span>
        <section className="Logo">TomatoEats</section>
        <button style={{ padding: "5px", border: "none", background: "none" }}>
          <img
            alt="country"
            src={data[selectedno - 1].url}
            style={{ height: "80px", width: "90px" }}
          />
        </button>
      </span>

      <div className="Dropdowns">
        <div className="Dropdown">
          <button className="DropdownButton">
            <img
              alt="country"
              src={data[selectedno - 1].url}
              style={{ height: "30px", width: "30px" }}
            />
            {selectedCountry} <span>▼</span>
          </button>
          <div className="DropdownContent">
            <button
              onClick={() => {
                handleCountryChange("India");
                handlenoChange(1);
              }}
            >
              India{"   "}
              <img
                alt="india"
                src="./images/india.png"
                style={{ height: "30px", width: "30px" }}
              />
            </button>
            <button
              onClick={() => {
                handleCountryChange("UAE");
                handlenoChange(2);
              }}
            >
              UAE
              <img
                alt="uae"
                src="./images/uae.png"
                style={{ height: "30px", width: "30px" }}
              />
            </button>
            {/* Add more country options as needed */}
          </div>
        </div>
        <div className="Dropdown">
          <button className="DropdownButton">
            {selectedLanguage} <span>▼</span>
          </button>
          <div className="DropdownContent">
            <button onClick={() => handleLanguageChange("English")}>
              English
            </button>
            <button onClick={() => handleLanguageChange("हिन्दी")}>
              हिन्दी
            </button>
            {/* Add more language options as needed */}
          </div>
        </div>
      </div>

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
        <ul className="social-icon">
          <li>
            <i class="fa-brands fa-linkedin-in"></i>
          </li>
          <li>
            <i class="fa-brands fa-youtube"></i>
          </li>
          <li>
            <i className="fa-brands fa-square-facebook"></i>
          </li>
          <li>
            <i className="fa-brands fa-x-twitter"></i>
          </li>
          <li>
            <i className="fa-brands fa-instagram"></i>
          </li>
        </ul>
        <ul>
          <li>
            <img
              style={{ height: "40px", width: "150px" }}
              alt="image1"
              src="https://b.zmtcdn.com/data/webuikit/9f0c85a5e33adb783fa0aef667075f9e1556003622.png"
            />
          </li>
          <li>
            <img
              style={{ height: "40px", width: "150px" }}
              alt="image2"
              src="https://b.zmtcdn.com/data/webuikit/23e930757c3df49840c482a8638bf5c31556001144.png"
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
