import React from "react";
import LoginPage from "../../components/LoginPage/LoginPage";
import NavBar from "../../components/NavBar/NavBar";
import Sidebar from "../../components/SideBar/Sidebar";

import "./login.css";

const Login = () => {
  return (
    <div className="login">
      <NavBar />
      <div className="loginContainer">
        <LoginPage />
        <Sidebar />
      </div>
    </div>
  );
};

export default Login;
