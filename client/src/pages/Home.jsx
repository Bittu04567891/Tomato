import React from "react";

import Footer from "../components/Footer/Footer";

import Copyright from "../components/copyright/Copyright";
import Restaurant from "./Restaurant/Restaurant";

const Home = () => {
  return (
    <div>
      <Restaurant />
      <Footer />
      <Copyright />
    </div>
  );
};

export default Home;
