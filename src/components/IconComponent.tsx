import React from "react";
import "./IconComponent.scss";

type IconComponentProps = {
  type: string;
  size: string;
  shade: boolean;
  text: string;
};

const IconComponent = ({ type, size, shade, text }: IconComponentProps) => {
  let icon = "assets/icons/" + type + ".svg";
  if (shade === false) {
    if (text !== "") {
      return (
        <div>
          <div className={"shade " + type}>{text}</div>
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
    if (text !== "") {
      return (
        <div>
          <div className={"shade " + type}>{text}</div>
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
