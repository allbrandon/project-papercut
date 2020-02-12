// includes back button, profile picture and account details
import React from "react";
import "./AccountHeading.scss";

export type AccountHeadingProps = {
  id: number;
  name: string;
  email: string;
};

const AccountHeading = ({ id, name, email }: AccountHeadingProps) => {
  id = 1;
  name = "Austin Vuong";
  email = "austin.vuong00@gmail.com";

  const small_gap = {
    height: "0.8rem"
  };
  const large_gap = {
    height: "2.1rem"
  };

  const profile_photo = "profile_" + id.toString();
  let icon = "../assets/icons/" + profile_photo + ".svg";

  return (
    <div className="background">
      <div className="back-button-padding">
        <button className="back-button">
          <i className="arrow-left"></i>
        </button>
      </div>
      <div className="center-profile">
        {/* assumes all image are at same size */}
        <span className="profile-circle">
          <span className="profile-img">
            <img src={process.env.PUBLIC_URL + `${icon}`} alt=""></img>
          </span>
        </span>
        <button className="plus-button">
          <i className="plus">+</i>
        </button>
      </div>
      <div className="name">{name}</div>
      <div style={small_gap} />
      <div className="email">{email}</div>
      <div style={large_gap} />
    </div>
  );
};

export default AccountHeading;
