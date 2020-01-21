import React from "react";
import StoreDetail from "../components/TransactionComponent/StoreDetail";
import Heading from "../components/TransactionComponent/Heading";
import { withKnobs, number, text, color } from "@storybook/addon-knobs";

export default {
  title: "Transaction Component",
  decorators: [withKnobs]
};

const woolies_store_info = {
  id: 1,
  name: "Woolworths Supermarkets",
  shoppingCentre: "1310 Bathurst City Centre",
  address: "210 Howick Street",
  number: "02 6330 8007",
  abn: "88 000 014 675"
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

const heading_info = {
  id: 1,
  logo: "woolworths.jpg",
  name: "Woolworths Supermarkets",
  transactionTime: "11/02/19 1:05PM"
};

export const heading = () => (
  <Heading
    id={number("id", 1)}
    logo={text("LogoPicture", "woolworths.jpg", 0)}
    name={text("Name", "Woolworths Supermarkets", 0)}
    transactionTime={text("Transaction Time", "11/02/19 1:05PM", 0)}
  />
);
