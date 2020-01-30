import React from "react";
import StoreDetail from "../components/TransactionComponent/StoreDetail";
import Heading from "../components/TransactionComponent/Heading";
import { withKnobs, number, text, array } from "@storybook/addon-knobs";
import ReceiptDetail from "../components/TransactionComponent/ReceiptDetail";

export default {
  title: "Transaction Component",
  decorators: [withKnobs]
};

export const store_detail = () => (
  <StoreDetail
    id={number("id", 1)}
    name={text("name", "Woolworths Supermarkets", 0)}
    shoppingCentre={text("Shopping Centre", "1310 Bathurst City Centre", 0)}
    address={text("Address", "210 Howick Street", 0)}
    number={text("Number", "02 6330 8007", 0)}
    abn={text("ABN", "88 000 014 675", 0)}
  />
);

export const heading = () => (
  <Heading
    id={number("id", 1)}
    name={text("Name", "Woolworths Supermarkets", 0)}
    transactionTime={text("Transaction Time", "11/02/19 1:05PM", 0)}
  />
);
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

export const receipt_detail = () => (
  <ReceiptDetail
    shoppingType={text("Shopping Type", "Grocery", 0)}
    shoppingDetail={array("Shopping Info", item_array)}
  />
);
