import React from "react";
import "./Item.css";

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
  circleColor,
  circleTextColor,
  quantity,
  item,
  price,
  discount,
  discountAmount,
  description
}: ItemComponentProps) => {
  let discountString: string;
  const circleStyle = {
    background: circleColor,
    color: circleTextColor
  };
  if (discountAmount) {
    discountString = (discountAmount as number).toFixed(2);
  }
  return (
    <div>
      <div className="general-item-info">
        <span style={circleStyle} className="number-circle">
          {quantity}
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
