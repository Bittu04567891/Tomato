import React from "react";
import "./Landing.css";
import { useAppContext } from "../../Context/AppContext";
import Navbar from "../../components/navbar/Navbar";

const Landing = () => {
  const { selectedno } = useAppContext();
  const data = [
    {
      no: 1,
      name: "India",
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
    <div className="landing">
      <Navbar />
      <img src="./images/log.png" alt="logo" className="logo" />
      <p className="para">
        Find the best restaurants, cafés <br />
        and bars in {data[selectedno - 1].name}
      </p>
      <img
        className="img-bg"
        alt="bg"
        src="https://b.zmtcdn.com/web_assets/81f3ff974d82520780078ba1cfbd453a1583259680.png"
      />
    </div>
  );
};

export default Landing;
