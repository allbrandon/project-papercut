import React from "react";
import ItemComponent, { ItemComponentProps } from "./ItemComponent";
import "./Item.scss";

// variables that are common to every single item in receipts
type ItemListComponentProps = {
  items: Array<ItemComponentProps>;
};

// returns all the items in 1 single transaction
// take in a list/array of items and make it a list
const ItemListComponent = ({ items }: ItemListComponentProps) => {
  // below are parameters for testing
  const item_one = {
    quantity: 8,
    item: "Cashew Nuts",
    price: 10.0,
    discount: "1/2 Special Discount",
    discountAmount: -5.0,
    description: "0.962 kg @ $3.90/kg"
  };

  const item_two = {
    quantity: 2,
    item: "Bok Choy",
    price: 2.0
  };

  const item_three = {
    quantity: 1,
    item: "Nectarine White Flesh",
    price: 3.75,
    description: "0.962 kg @ $3.90/kg"
  };

  const item_four = {
    quantity: 1,
    item: "Maple Syrup",
    price: 3.5,
    discount: "Introductory Offer Discount",
    discountAmount: -1.0
  };

  items = [item_one, item_two, item_three, item_four];
  // end of testing

  return (
    <div>
      {items.map(item => (
        <div>
          <ItemComponent
            circleTextColor={item.circleTextColor}
            circleColor={item.circleColor}
            quantity={item.quantity}
            item={item.item}
            price={item.price}
            discount={item.discount}
            discountAmount={item.discountAmount}
            description={item.description}
          />
          <br />
        </div>
      ))}
    </div>
  );
};

export default ItemListComponent;
