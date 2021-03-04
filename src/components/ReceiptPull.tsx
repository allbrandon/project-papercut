import React from "react";
import ItemListComponent from "./ReceiptComponent/ItemListComponent";

export type ReceiptInfo = {
  id: number;
  store: string;
  storeId: number;
  centre: string;
  category: string;
  address: string;
  number: string;
  abn: string;
  date: string;
  dateTime: string;
  subtotal: number;
  total: number;
  card: CardInfo;
  items: Array<Item>;
};
export type Item = {
  quantity: number;
  item: string;
  price: number;
  category: string;
  discountDesc?: string;
  discountAmount?: number;
  description: string;
};

export type CardInfo = {
  merchant_id: number;
  term_id: string;
  card_id: string;
  card_type: string;
  card_account: string;
  aid: string;
  arqc: string;
  tur: string;
  total: number;
  time: string;
};

const itemsList: Array<Item> = [
  {
    quantity: 1,
    item: "Cashew Nuts",
    price: 10.0,
    category: "grocery",
    discountDesc: "1/2 Price Discount",
    discountAmount: -5.0,
    description: "0.962kg @ $3.90/kg"
  },
  {
    quantity: 2,
    item: "Bok Choy",
    category: "grocery",
    price: 2.0,
    description: ""
  },
  {
    quantity: 1,
    item: "Nectarine White Flesh",
    price: 3.75,
    category: "grocery",
    description: "0.962kg @ $3.90/kg"
  },
  {
    quantity: 1,
    item: "Maple Syrup",
    price: 3.5,
    category: "grocery",
    discountDesc: "Introductory Offer Discount",
    discountAmount: -1.0,
    description: ""
  }
];
const card_object: CardInfo = {
  merchant_id: 611000504002691,
  term_id: "W2691001",
  card_id: "7370 T",
  card_type: "MasterCard",
  card_account: "CREDIT",
  aid: "A0000000041010",
  arqc: "F2FA411F78C085ED",
  tur: "0000000000",
  total: 81.3,
  time: "01/01/2020 18:45"
};
const receiptDetail: ReceiptInfo = {
  id: 1,
  store: "Woolworths Supermarkets",
  storeId: 1,
  centre: "1310 Bathurst City Centre",
  category: "grocery",
  address: "210 Howick St",
  number: "02 6330 8007",
  abn: "88 000 014 675",
  date: "01/01/2020",
  dateTime: "01/01/2020 1:05PM",
  subtotal: 109.59,
  total: 109.59,
  card: card_object,
  items: itemsList
};
const receiptDetail2: ReceiptInfo = {
  id: 2,
  store: "Coles",
  storeId: 2,
  centre: "1310 Bathurst City Centre",
  category: "grocery",
  address: "210 Howick St",
  number: "02 6330 8007",
  abn: "88 000 014 675",
  date: "01/01/2020",
  dateTime: "01/01/2020 1:05PM",
  subtotal: 42.0,
  total: 42.0,
  card: card_object,
  items: itemsList
};

export const receiptList = [receiptDetail, receiptDetail2];

export const receiptGrab = ({ trans_id }: any) => {
  for (var i = 0; i < receiptList.length; i++) {
    console.log(receiptList[i].id);
    console.log(trans_id);
    if (receiptList[i].id === trans_id) {
      console.log("Returned!");
      return receiptList[i];
    }
  }
  console.log("Oops");
  return null;
};
