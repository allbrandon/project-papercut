import React from "react";
import "./IconComponent.scss";

type IconComponentProps = {
  type: string;
  size: string;
  shade: boolean;
};

const IconComponent = ({ type, size, shade }: IconComponentProps) => {
  let icon = "assets/icons/" + type + ".svg";
  if (shade === false) {
    return (
      <div>
        <img src={process.env.PUBLIC_URL + `${icon}`} alt=""></img>
      </div>
    );
  } else {
    console.log("test");
    return (
      <div className={"shade " + type}>
        <img src={process.env.PUBLIC_URL + `${icon}`} alt=""></img>
      </div>
    );
  }
};

export default IconComponent;
