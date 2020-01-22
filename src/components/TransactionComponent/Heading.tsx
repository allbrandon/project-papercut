import React from "react";
import "./Transactions.scss";

export type Heading_details = {
  id: number;
  backgroundColor?: string;
  logo: string;
  name: string;
  transactionTime: string;
};

const Heading = ({
  id,
  backgroundColor = "#64BD79",
  logo,
  name,
  transactionTime
}: Heading_details) => {
  const backgroundStyle = {
    background: backgroundColor
  };

  return (
    <div style={backgroundStyle}>
      <div className="back-button-padding">
        <button className="back-button">
          <i className="arrow-left"></i>
        </button>
      </div>
      <div className="heading-logo-circle">
        <img src={logo} alt="Company Logo" />
      </div>
      <div className="heading-store-name">{name}</div>
      <div className="heading-transaction-time">{transactionTime}</div>
      <div className="heading-padding"></div>
    </div>
  );
};

export default Heading;
