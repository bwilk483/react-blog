import React from "react";

import "./registerPage.css";

import { Link } from "react-router-dom";

const RegisterPage = () => {
  return (
    <div className="registerContainer">
      <div className="registerPage">
        <span className="registerTitle">Register</span>
        <form className="registerForm">
          <label>Username</label>
          <input
            className="registerInput"
            type="text"
            placeholder="Enter Username"
          ></input>
          <label>Email</label>
          <input
            className="registerInput"
            type="Email"
            placeholder="Enter your email"
          ></input>
          <label>Password</label>
          <input
            className="registerInput"
            type="password"
            placeholder="Enter your password"
          ></input>
          <button className="registerBtn">Register</button>
        </form>
        <Link to="/login">
          <button className="registerLoginBtn">Login</button>
        </Link>
      </div>
    </div>
  );
};

export default RegisterPage;
