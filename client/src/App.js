import React from "react";
import SignUp from "./pages/SignUp/SignUp";
import RestroHome from "./pages/Resto_bussiness/RestroHome";
import Login from "./pages/Login/Login";
import Home from "./pages/Home";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Copyright from "./components/copyright/Copyright";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/Restaurant" element={<RestroHome />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/SignUp" element={<SignUp />} />
        </Routes>
        <Footer />
        <Copyright />
      </BrowserRouter>
    </div>
  );
};

export default App;
