import React from "react";
import StoreDetail from "../components/TransactionComponent/StoreDetail";
import Heading from "../components/TransactionComponent/Heading";
import { withKnobs, number, text, array, object } from "@storybook/addon-knobs";
import ReceiptDetail from "../components/TransactionComponent/ReceiptDetail";
import PriceDetail from "../components/TransactionComponent/PriceDetail";
import CardInfo from "../components/TransactionComponent/CardInfo";
import TransactionComponent from "../components/TransactionComponent/TransactionComponent";

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
    shoppingType={text("Shopping Type", "grocery", 0)}
    shoppingDetail={array("Shopping Info", item_array)}
  />
);

export const price_detail_cash = () => (
  <PriceDetail
    subtotal={number("subtotal", 109.59)}
    total={number("total", 109.59)}
    cash={number("Cash", 120.0)}
  />
);

export const card_info = () => (
  <CardInfo
    merchant_id={number("merchant id", 611000504002691)}
    term_id={text("term id", "W2691001", 0)}
    card_id={text("card id", "7370 T", 0)}
    card_type={text("card type", "MasterCard", 0)}
    card_account={text("card account", "CREDIT", 0)}
    aid={text("AID", "A0000000041010", 0)}
    arqc={text("ARQC", "F2FA411F78C085ED", 0)}
    tur={text("TUR", "0000000000", 0)}
    total={number("total", 81.3)}
    time={text("time", "02/01/19 18:45", 0)}
  />
);

const card_object = {
  merchant_id: 611000504002691,
  term_id: "W2691001",
  card_id: "7370 T",
  card_type: "MasterCard",
  card_account: "CREDIT",
  aid: "A0000000041010",
  arqc: "F2FA411F78C085ED",
  tur: "0000000000",
  total: 81.3,
  time: "02/01/19 18:45"
};

export const price_detail_card = () => (
  <PriceDetail
    subtotal={number("subtotal", 109.59)}
    total={number("total", 109.59)}
    card={object("card detail", card_object, 0)}
  />
);

const heading_object = {
  id: 1,
  name: "Woolworths Supermarkets",
  transactionTime: "11/02/19 1:05PM"
};

const item_object = {
  shoppingType: "grocery",
  shoppingDetail: item_array
};

const price_object = {
  subtotal: 109.59,
  total: 109.59,
  card: card_object
};

const store_object = {
  id: 1,
  name: "Woolworths Supermarkets",
  shoppingCentre: "1310 Bathurst City Centre",
  address: "210 Howick Street",
  number: "02 6330 8007",
  abn: "88 000 014 675"
};

export const entire_transaction = () => (
  <TransactionComponent
    heading={object("Heading", heading_object, 0)}
    items={object("Items", item_object, 0)}
    price={object("Price", price_object, 0)}
    store={object("Store", store_object, 0)}
  />
);
