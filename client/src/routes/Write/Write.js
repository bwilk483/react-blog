import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import Sidebar from "../../components/SideBar/Sidebar";
import WriteForm from "../../components/WriteForm/WriteForm";
import "./write.css";

const Write = () => {
  return (
    <div>
      <NavBar />
      <div className="writeLayout">
        <WriteForm />
        <Sidebar />
      </div>
    </div>
  );
};

export default Write;
