// the whole screen
import React from "react";
import "./AccountSettings.scss";
import AccountHeading, { AccountHeadingProps } from "./AccountHeading";
import Settings from "./Settings";
import Logout from "./Logout";

const AccountSettings = ({ id, name, email }: AccountHeadingProps) => {
  id = 1;
  name = "Austin Vuong";
  email = "austin.vuong00@gmail.com";

  const gap = {
    height: "5.0rem"
  };

  return (
    <div>
      <AccountHeading id={id} name={name} email={email} />

      <div className="settings-tab">
        <div className="center-component">
          <Settings />
        </div>
      </div>

      <div style={gap} />

      <Logout />

      <div style={gap} />
    </div>
  );
};

export default AccountSettings;
