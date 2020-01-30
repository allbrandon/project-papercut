import React from "react";
import "./ProfileSettingsListComponent.scss";
import { Link } from "react-router-dom";
export const ProfileSettingsListComponent = ({}: any) => {
  return (
    <div className="settings__wrapper">
      <Link to="/welcome">
        <img src={process.env.PUBLIC_URL + "assets/papercut.svg"} alt=""></img>
      </Link>
    </div>
  );
};

export default ProfileSettingsListComponent;
