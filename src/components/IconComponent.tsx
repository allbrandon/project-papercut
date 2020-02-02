import React from "react";
import "./IconComponent.scss";

type IconComponentProps = {
  type: string;
  size: string;
  shade: boolean;
  quantity: string;
};

const IconComponent = ({ type, size, shade, quantity }: IconComponentProps) => {
  let icon = "assets/icons/" + type + ".svg";
  if (shade === false) {
    if (quantity !== "") {
      return (
        <div>
          <div className={"shade " + type}>{quantity}</div>
        </div>
      );
    } else {
      return (
        <div>
          <img src={process.env.PUBLIC_URL + `${icon}`} alt=""></img>
        </div>
      );
    }
  } else {
    if (quantity !== "") {
      return (
        <div>
          <div className={"shade " + type}>{quantity}</div>
        </div>
      );
    } else {
      return (
        <div className={"shade " + type}>
          <img src={process.env.PUBLIC_URL + `${icon}`} alt=""></img>
        </div>
      );
    }
  }
};

export default IconComponent;
