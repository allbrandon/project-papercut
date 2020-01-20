import React from "react";
import ItemComponent from "../components/ReceiptComponent/ItemComponent";
import ItemListComponent from "../components/ReceiptComponent/ItemListComponent";
import { withKnobs, number, text, array, color } from "@storybook/addon-knobs";

// aLL the receipt item objects
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

// the list of receipt items
const item_array = [item_one, item_two, item_three, item_four];

export default {
  title: "Single list items",
  decorators: [withKnobs]
};

export const item = () => (
  <ItemComponent
    circleColor={color("Circle Color", "#E9ACAB")}
    circleTextColor={color("Circle Text Color", "#A93029")}
    quantity={number("Quantity", 8)}
    item={text("Item", "Cashew Nuts", 0)}
    price={number("Price", 10.0)}
    discount={text("Discount", "1/2 Special Discount", 0)}
    discountAmount={number("Discount Amount", -5.0)}
    description={text("Description", "0.962 kg @ $3.90/kg", 0)}
  />
);

export const itemList = () => (
  <ItemListComponent items={array("Item Info", item_array)} />
);
