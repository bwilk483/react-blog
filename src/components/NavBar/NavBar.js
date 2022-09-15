import React from "react";
import "./NavBar.css";

import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaTwitterSquare,
  FaLinkedin,
  FaSearch,
} from "react-icons/fa";

const dev = "img/me.jpg";

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
          <li className="navListItems">HOME</li>
          <li className="navListItems">ABOUT</li>
          <li className="navListItems">CONTACT</li>
          <li className="navListItems">WRITE</li>
          <li className="navListItems">LOGOUT</li>
        </ul>
      </div>
      <div className="navRight">
        <img className="navImg" src={dev} alt="developer"></img>
        <FaSearch
          size={20}
          style={{ color: "#666", marginLeft: "1rem", cursor: "pointer" }}
        />
      </div>
    </div>
  );
};

export default NavBar;
