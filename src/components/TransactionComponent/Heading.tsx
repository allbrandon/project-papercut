import React from "react";
import "./Heading.scss";
import IconComponent from "../IconComponent";

export type HeadingDetailsProps = {
  id: number;
  backgroundColor?: string;
  name: string;
  transactionTime: string;
};

const Heading = ({
  id,
  backgroundColor = "#64BD79",
  name,
  transactionTime
}: HeadingDetailsProps) => {
  const backgroundStyle = {
    background: backgroundColor
  };

  const smallGap = {
    height: "0.8rem"
  };

  const largeGap = {
    height: "3.2rem"
  };

  let shop_name = name
    .split(" ")
    .join("")
    .toLowerCase();

  return (
    <div style={backgroundStyle}>
      <div className="back-button-padding">
        <button className="back-button">
          <i className="arrow-left"></i>
        </button>
      </div>
      <div className="heading-logo-circle">
        <div className="icon">
          <IconComponent type={shop_name} size="" />
        </div>
      </div>
      <div style={smallGap}></div>
      <div className="heading-store-name">{name}</div>
      <div className="heading-transaction-time">{transactionTime}</div>
      <div style={largeGap}></div>
    </div>
  );
};

export default Heading;
