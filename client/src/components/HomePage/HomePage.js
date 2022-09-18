import React from "react";
import "./HomePage.css";
import Sidebar from "../SideBar/Sidebar";
import Posts from "../Post/Posts";

const HomePage = () => {
  return (
    <div className="HomePage">
      <Posts />
      <Sidebar />
    </div>
  );
};

export default HomePage;
