import React from "react";
import "./header.css";

const Header = () => {
  return (
    <div className="Header">
      <div className="headerTitle">
        <span className="headerTitleSm">React and Node</span>
        <span className="headerTitleLg">Blog</span>
      </div>
      <img
        className="headerImg"
        src="https://images.pexels.com/photos/1167355/pexels-photo-1167355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        alt=""
      ></img>
    </div>
  );
};

export default Header;
