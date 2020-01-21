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
        <div className="back-button">B</div>
      </div>
      <div>{logo}</div>
      <div className="heading-store-name">{name}</div>
      <div className="heading-transaction-time">{transactionTime}</div>
    </div>
  );
};

export default Heading;
