import React from "react";
import "./ProfileHeaderComponent.scss";
// import InputComponent from "../InputComponent/InputComponent";
import ButtonComponent from "../ButtonComponent/ButtonComponent";
import { Link } from "react-router-dom";
export const ProfileHeaderComponent = ({}: any) => {
  return (
    <div className="profile__wrapper">
      <Link to="/welcome">
        <img src={process.env.PUBLIC_URL + "assets/papercut.svg"} alt=""></img>
      </Link>{" "}
    </div>
  );
};

export default ProfileHeaderComponent;
