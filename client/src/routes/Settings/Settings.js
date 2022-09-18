import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import Sidebar from "../../components/SideBar/Sidebar";
import SettingsPage from "../../components/SettingsPage/SettingsPage";
import "./settings.css";

const Settings = () => {
  return (
    <div>
      <NavBar />
      <div className="settingsContainer">
        <SettingsPage />
        <Sidebar />
      </div>
    </div>
  );
};

export default Settings;
