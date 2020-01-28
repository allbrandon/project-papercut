import React from "react";
import "./Transactions.scss";
import Woolworths from "../../assets/woolworths.png";
import Sparrows from "../../assets/sparrows.png";
import error from "../../assets/error.png";

export type HeadingDetails = {
  id: number;
  backgroundColor?: string;
  logo: string;
  name: string;
  transactionTime: string;
};

const Heading = ({
  id,
  backgroundColor = "#64BD79",
  name,
  transactionTime
}: HeadingDetails) => {
  // the parameter below are added for testing
  id = 1;
  name = "Woolworths Supermarkets";
  transactionTime = "11/02/19 1:05PM";
  // end of testing

  const backgroundStyle = {
    background: backgroundColor
  };

  const smallGap = {
    height: "0.8rem"
  };

  const largeGap = {
    height: "3.2rem"
  };

  var logo_image;
  if (id === 1) {
    logo_image = Woolworths;
  } else if (id === 2) {
    logo_image = Sparrows;
  } else {
    logo_image = error;
  }

  return (
    <div style={backgroundStyle}>
      <div className="back-button-padding">
        <button className="back-button">
          <i className="arrow-left"></i>
        </button>
      </div>
      <div className="heading-logo-circle">
        <img src={logo_image} alt="Company Logo" />
      </div>
      <div style={smallGap}></div>
      <div className="heading-store-name">{name}</div>
      <div className="heading-transaction-time">{transactionTime}</div>
      <div style={largeGap}></div>
    </div>
  );
};

export default Heading;
