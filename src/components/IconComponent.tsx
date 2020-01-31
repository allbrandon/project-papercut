import React from "react";

type IconComponentProps = {
  type: string;
  size: string;
};

const IconComponent = ({ type, size }: IconComponentProps) => {
  let icon = "assets/icons/" + type + ".svg";
  return (
    <div>
      <img src={process.env.PUBLIC_URL + `${icon}`} alt=""></img>
    </div>
  );
};

export default IconComponent;
