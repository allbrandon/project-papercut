import React from "react";
import { Link } from "react-router-dom";
import ProfileHeaderComponent from "../ProfileHeaderComponent/ProfileHeaderComponent";
import ProfileSettingsListComponent from "../ProfileSettingsListComponent/ProfileSettingsListComponent";
export const AccountProfileComponent = ({}: any) => {
  return (
    <div>
      <ProfileHeaderComponent />
      <ProfileSettingsListComponent />
    </div>
  );
};

export default AccountProfileComponent;
