import React from "react";
import "./sidebar.css";

import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaTwitterSquare,
  FaLinkedin,
} from "react-icons/fa";

const sidebarImg = "img/sidebar.png";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img className="sidebarImg" src={sidebarImg} alt=""></img>
        <p>
          Culpa nulla cupidatat id magna in Lorem cupidatat esse aute non
          ullamco ad enim qui.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">Life</li>
          <li className="sidebarListItem">Music</li>
          <li className="sidebarListItem">Style</li>
          <li className="sidebarListItem">Sports</li>
          <li className="sidebarListItem">Tech</li>
          <li className="sidebarListItem">Cinema</li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">Follow US</span>
        <div className="sidebarSocials">
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
      </div>
    </div>
  );
};

export default Sidebar;
