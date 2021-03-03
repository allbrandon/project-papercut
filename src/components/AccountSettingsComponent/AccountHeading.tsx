// includes back button, profile picture and account details
import React, { useContext } from "react";
import UserContext from "../../context/UserContext";

import "./AccountHeading.scss";

export type AccountHeadingProps = {
  id: number;
  name: string;
  email: string;
};

const AccountHeading = ({ id, name, email }: AccountHeadingProps) => {
  id = 1;

  const small_gap = {
    height: "0.8rem"
  };
  const large_gap = {
    height: "2.1rem"
  };

  const profile_photo = "profile_" + id.toString();
  let icon = "../assets/icons/" + profile_photo + ".svg";

  const [user] = useContext(UserContext);
  return (
    <div className="account-heading">
      <div className="background">
        <div className="back-button-padding">
          <button className="back-button" onClick={() => window.history.back()}>
            <i className="arrow-left"></i>
          </button>
        </div>
        <div className="center-profile">
          {/* assumes all image are at same size */}
          <img
            className="profile-image"
            src={process.env.PUBLIC_URL + `${icon}`}
            alt=""
          ></img>
          {/* <button className="plus-button">
            <i className="plus">+</i>
          </button> */}
        </div>
        <div className="name">{user ? user.name : ""}</div>
        <div style={small_gap} />
        {/*
        // @ts-ignore */}
        <div className="email">{user ? user.email : ""}</div>
        <div style={large_gap} />
      </div>
    </div>
  );
};

export default AccountHeading;
