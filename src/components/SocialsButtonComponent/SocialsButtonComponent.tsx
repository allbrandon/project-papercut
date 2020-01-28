import React from "react";
import "./SocialsButtonComponent.scss";
import { Link } from "react-router-dom";

export type SocialsButtonComponent = {
  socialType: string;
  size: string;
};

export const SocialsButtonComponent = ({
  socialType,
  size
}: SocialsButtonComponent) => {
  const socialStyle = socialType.toLowerCase();
  return (
    <div className="social__wrap">
      <div className={"socials " + socialStyle}>
        <h2>Continue with {socialType}</h2>
      </div>
    </div>
  );
};

export default SocialsButtonComponent;
