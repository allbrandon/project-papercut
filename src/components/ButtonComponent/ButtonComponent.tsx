import React from "react";
import "./ButtonComponent.scss";
import { Link } from "@reach/router";

export type ButtonComponentProps = {
  buttonType: string;
  size: string;
  onClick?: () => Promise<void>;
};

export const ButtonComponent = ({
  buttonType,
  size,
  onClick
}: ButtonComponentProps) => {
  const buttonStyle = buttonType.toLowerCase();
  const buttonLink = buttonStyle.replace(/\s/g, "");
  let styleWrap = "";
  if (buttonStyle.includes("sign")) {
    styleWrap = "sign";
  }

  return (
    <Link to={"/" + buttonLink}>
      <button className={size} onClick={onClick}>
        <h1 className={buttonStyle}>{buttonType}</h1>
      </button>
    </Link>
  );
};

export default ButtonComponent;
