import React from "react";
import Navbar from "../components/NavBar/NavBar";
import Header from "../components/Header/Header";
import HomePage from "../components/HomePage/HomePage";

const home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <HomePage />
    </div>
  );
};

export default home;
