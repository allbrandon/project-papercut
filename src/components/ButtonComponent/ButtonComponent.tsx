import React from "react";
import "./ButtonComponent.scss";
import { Link } from "react-router-dom";

export type ButtonComponentProps = {
  buttonType: string;
  size: string;
};

export const ButtonComponent = ({ buttonType, size}: ButtonComponentProps) => {
  const buttonStyle = buttonType.toLowerCase();
  const buttonLink = buttonStyle.replace(/\s/g, "");
  let styleWrap = "";
  if (buttonStyle.includes("sign")) {
    styleWrap = "sign";
  }

  return (
    <Link to={"/" + buttonLink}>
      <div className={size}>
        <h1 className={buttonStyle}>{buttonType}</h1>
      </div>
    </Link>
  );
};

export default ButtonComponent;
