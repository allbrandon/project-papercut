import React from "react";
import "./ReceiptDetail.scss";
import ItemListComponent, {
  ItemListComponentProps
} from "../ReceiptComponent/ItemListComponent";

export type ReceiptDetailProps = {
  iconColor?: string;
  shoppingType: string;
  shoppingDetail: ItemListComponentProps;
};

const ReceiptDetail = ({
  iconColor = "#4D9A5F",
  shoppingType,
  shoppingDetail
}: ReceiptDetailProps) => {
  const iconStyle = {
    color: iconColor
  };

  var iconName;

  if (shoppingType === "Grocery") {
    iconName = "icon ion-md-basket";
  } else if (shoppingType === "Food") {
    iconName = "icon ion-md-restaurant";
  } else {
    iconName = "icon ion-md-bug";
  }

  const LargeGap = {
    height: "2.3rem"
  };
  const SmallGap = {
    height: "0.8rem"
  };

  return (
    <div>
      <div className="general-receipt-info">
        <span className="items-text">Items</span>
        <i className={iconName} style={iconStyle}></i>
        <span className="category-text">{shoppingType}</span>
      </div>
      <div style={LargeGap} />
      <div className="dollar-sign">$</div>
      <div style={SmallGap} />
      <div>
        <ItemListComponent items={shoppingDetail} />
      </div>
    </div>
  );
};

export default ReceiptDetail;
