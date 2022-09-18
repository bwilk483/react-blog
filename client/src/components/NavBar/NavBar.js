import React from "react";
import "./NavBar.css";

import { Link } from "react-router-dom";

import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaTwitterSquare,
  FaLinkedin,
  FaSearch,
} from "react-icons/fa";

const dev = "img/me.jpg";

const user = false;

const NavBar = () => {
  return (
    <div className="navBar">
      <div className="navLeft">
        <FaFacebookSquare
          size={20}
          style={{ color: "#444", marginRight: "1rem", cursor: "pointer" }}
        />
        <FaTwitterSquare
          size={20}
          style={{ color: "#444", marginRight: "1rem", cursor: "pointer" }}
        />
        <FaLinkedin
          size={20}
          style={{ color: "#444", marginRight: "1rem", cursor: "pointer" }}
        />
        <FaInstagramSquare
          size={20}
          style={{ color: "#444", marginRight: "1rem", cursor: "pointer" }}
        />
      </div>

      <div className="navCenter">
        <ul className="navList">
          <li className="navListItems">
            <Link to="/">HOME</Link>
          </li>
          <li className="navListItems">ABOUT</li>
          <li className="navListItems">CONTACT</li>
          <li className="navListItems">
            <Link to="/write">WRITE</Link>
          </li>
          <li className="navListItems">{user && "LOGOUT"}</li>
        </ul>
      </div>
      <div className="navRight">
        {user ? (
          <Link to="/settings">
            <img className="navImg" src={dev} alt="developer"></img>
          </Link>
        ) : (
          <ul className="navList">
            <li className="navListItems">
              <Link to="/login">LOGIN</Link>
            </li>
            <li className="navListItems">
              <Link to="/register">REGISTER</Link>
            </li>
          </ul>
        )}

        <FaSearch
          size={20}
          style={{ color: "#666", marginLeft: "1rem", cursor: "pointer" }}
        />
      </div>
    </div>
  );
};

export default NavBar;
