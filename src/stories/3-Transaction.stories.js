import React from "react";
import StoreDetail from "../components/TransactionComponent/StoreDetail";
import Heading from "../components/TransactionComponent/Heading";
import { withKnobs, number, text } from "@storybook/addon-knobs";
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

export const receipt_detail = () => (
  <ReceiptDetail shoppingType={text("Shopping Type", "Grocery", 0)} />
);
