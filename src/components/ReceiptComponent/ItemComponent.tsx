import React from "react";
import "./ItemComponent.scss";
import IconComponent from "../IconComponent";

// returns 1 single item in the receipt
// takes color "to symbolise cash/card payment", quantity "how many you bought", item "name of the item you purchased", price "the default price of the item",
// discount "what kind of discount you got for the item" (optional)
// discountamount "the amount of money you got off because of the discount, need to be negative" (optional)
// description "detailed description of item" (optional)
export type ItemComponentProps = {
  quantity: number;
  item: string;
  price: number;
  discountDesc?: string;
  discountAmount?: number;
  category: string;
  description: string;
};
const ItemComponent = ({
  quantity,
  item,
  price,
  discountDesc,
  discountAmount,
  category,
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
  if (discountAmount) {
    discountString = (discountAmount as number).toFixed(2);
  } else {
    discountString = "";
  }
  if (quantity > 99) {
    quantityString = "99+";
  } else {
    quantityString = quantity.toString();
  }
  const maxChar = 21;
  let descString = description;
  if (description.length > maxChar) {
    descString = description.substring(0, maxChar);
    descString =
      descString.substring(
        0,
        Math.min(descString.length, descString.lastIndexOf(" "))
      ) + " . . .";
  }
  return (
    <div>
      <div className="general__item__info">
        <IconComponent
          type={category}
          size=""
          shade={true}
          text={quantityString}
        />
        <div className="name">{item}</div>
        <div className="price">{price.toFixed(2)}</div>
      </div>

      <div className="discount__info">
        <div>{discountDesc}</div>
        <span>{discountString}</span>
      </div>
      <div className="description__info">{descString}</div>
    </div>
  );
};
export default ItemComponent;
