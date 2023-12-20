import React from "react";

import Footer from "../components/Footer/Footer";

import Copyright from "../components/copyright/Copyright";
import Restaurant from "./Restaurant/Restaurant";
import Landing from "./Landing/Landing";

const Home = () => {
  return (
    <div>
      <Landing />
      <Restaurant />
      <Footer />
      <Copyright />
    </div>
  );
};

export default Home;
