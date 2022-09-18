import React from "react";
import "./settingsPage.css";

import { FaUserCircle } from "react-icons/fa";

const SettingsPage = () => {
  return (
    <div className="settingsPageContainer">
      <div className="settingsPage">
        <div className="settingsAccount">
          <span className="settingsUpdateAccount">Update Your Account</span>
          <span className="settingsDeleteAccount">Delete Your Account</span>
        </div>
        <form className="settingsForm">
          <label>Profile Picture</label>
          <div className="settingsPP">
            <img className="" src="./img/me.jpg" alt=""></img>
            <label className="settingsUser" htmlFor="fileInput">
              <FaUserCircle size={25} className="settingsPPIcon" />
            </label>
            <input
              type="file"
              id="fileInput"
              style={{ display: "none" }}
            ></input>
          </div>
          <label>Username</label>
          <input type="text" placeholder="Bryan Wilkerson"></input>
          <label>Email</label>
          <input type="email" placeholder="Bryan@bryan.com"></input>
          <label>Password</label>
          <input type="password"></input>
          <button className="settingsSubmit">Update</button>
        </form>
      </div>
    </div>
  );
};

export default SettingsPage;
