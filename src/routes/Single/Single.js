import React from "react";
import "./single.css";

import NavBar from "../../components/NavBar/NavBar";
import Sidebar from "../../components/SideBar/Sidebar";
import SinglePost from "../../components/SinglePost/SinglePost";

const Single = () => {
  return (
    <div className="single">
      <NavBar />
      <div className="singleLayout">
        <SinglePost />
        <Sidebar />
      </div>
    </div>
  );
};

export default Single;
