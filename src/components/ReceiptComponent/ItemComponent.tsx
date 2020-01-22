import React from "react";
import "./Item.scss";

// returns 1 single item in the receipt
// takes color "to symbolise cash/card payment", quantity "how many you bought", item "name of the item you purchased", price "the default price of the item",
// discount "what kind of discount you got for the item" (optional)
// discountamount "the amount of money you got off because of the discount, need to be negative" (optional)
// description "detailed description of item" (optional)
export type ItemComponentProps = {
  circleColor?: string;
  circleTextColor?: string;
  quantity: number;
  item: string;
  price: number;
  discount?: string;
  discountAmount?: number;
  description?: string;
};
const ItemComponent = ({
  circleColor = "#B7EBC4",
  circleTextColor = "#4D9A5F",
  quantity,
  item,
  price,
  discount,
  discountAmount,
  description
}: ItemComponentProps) => {
  // below are some parameter passing for testing
  // circleColor = "#E9ACAB";
  // circleTextColor = "#A93029";
  // quantity = 6;
  // item = "Cashew Nuts";
  // price = 10.0;
  // discount = "1/2 Special Discount";
  // discountAmount = -5.0;
  // description = "0.962 kg @ $3.90/kg";
  // end of testing

  let discountString: string;
  let quantityString: string;
  let circleFontSize: string;
  if (discountAmount) {
    discountString = (discountAmount as number).toFixed(2);
  } else {
    discountString = "";
  }
  if (quantity > 99) {
    quantityString = "99+";
    circleFontSize = "1rem";
  } else {
    quantityString = quantity.toString();
    circleFontSize = "1.4rem";
  }
  const circleStyle = {
    background: circleColor,
    color: circleTextColor,
    fontSize: circleFontSize
  };
  return (
    <div>
      <div className="general-item-info">
        <span style={circleStyle} className="number-circle">
          {quantityString}
        </span>
        <span className="name">{item}</span>
        <span className="price">{price.toFixed(2)}</span>
      </div>

      <div className="discount-info">
        <span className="discount">{discount}</span>
        <span className="discount-amount">{discountString}</span>
      </div>

      <div className="description-info">{description}</div>
    </div>
  );
};
export default ItemComponent;
