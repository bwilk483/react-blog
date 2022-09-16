import React from "react";
import "./HomePage.css";
import Sidebar from "../SideBar/Sidebar";
import Post from "../Post/Post";

const HomePage = () => {
  return (
    <div className="HomePage">
      <Post />
      <Sidebar />
    </div>
  );
};

export default HomePage;
