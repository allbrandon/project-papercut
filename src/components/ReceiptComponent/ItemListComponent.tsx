import React from "react";
import ItemComponent, { ItemComponentProps } from "./ItemComponent";
import "./Item.scss";

// variables that are common to every single item in receipts
export type ItemListComponentProps = {
  items: Array<ItemComponentProps>;
};

// returns all the items in 1 single transaction
// take in a list/array of items and make it a list
const ItemListComponent = ({ items }: ItemListComponentProps) => {
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
