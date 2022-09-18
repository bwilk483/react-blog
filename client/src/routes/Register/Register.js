import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import RegisterPage from "../../components/RegisterPage/RegisterPage";
import SideBar from "../../components/SideBar/Sidebar";

import "./register.css";

const Register = () => {
  return (
    <div className="register">
      <NavBar />
      <div className="registerLayout">
        <RegisterPage />
        <SideBar />
      </div>
    </div>
  );
};

export default Register;
