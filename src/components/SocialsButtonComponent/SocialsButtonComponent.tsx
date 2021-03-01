import React from "react";
import "./SocialsButtonComponent.scss";
import { Link } from "react-router-dom";
import {
  FacebookLoginButton,
  GoogleLoginButton,
  TwitterLoginButton
} from "react-social-login-buttons";

export type SocialsButtonComponent = {
  socialType: string;
  size: string;
};

export const SocialsButtonComponent = ({ socialType, size }: any) => {
  const socialStyle = socialType.toLowerCase();
  return (
    <div className="social__wrap">
      <div className={"socials " + socialStyle}>
        {/* <img
          className="social__icon"
          src={process.env.PUBLIC_URL + "assets/icons/" + socialType + ".svg"}
          alt=""
        /> */}
        <h2>Continue with {socialType}</h2>
      </div>
    </div>
    // <div className="social__wrapper">
    //   <GoogleLoginButton />
    //   <FacebookLoginButton />
    //   <TwitterLoginButton />
    // </div>
  );
};

export default SocialsButtonComponent;
