import React from "react";
import "./Transactions.scss";

type ReceiptDetailProps = {
  iconColor?: string;
  shoppingType: string;
};

const ReceiptDetail = ({
  iconColor = "#4D9A5F",
  shoppingType
}: ReceiptDetailProps) => {
  const iconStyle = {
    color: iconColor
  };

  shoppingType = "Food";

  var iconName;

  if (shoppingType === "Grocery") {
    iconName = "icon ion-md-basket";
  } else if (shoppingType === "Food") {
    iconName = "icon ion-md-restaurant";
  } else {
    iconName = "icon ion-md-bug";
  }

  return (
    <div>
      <div>
        <span>Items</span>
        <i className={iconName} style={iconStyle}></i>
        <span>{shoppingType}</span>
      </div>
      <div>LIST!!!</div>
    </div>
  );
};

export default ReceiptDetail;
