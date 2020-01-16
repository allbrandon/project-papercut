import React from 'react';
import StoreDetail from '../components/TransactionComponent/StoreDetail'
import CashTransactions from '../components/TransactionComponent/CashTransaction'
import { withKnobs, object } from "@storybook/addon-knobs";

export default {
    title: 'Transaction Component',
    decorators: [withKnobs]
};

const woolies_store_info = {
    id: 1,
    name: "Woolworths Supermarkets",
    shopping_centre: "1310 Bathurst City Centre",
    address: "210 Howick Street",
    number: "02 6330 8007",
    abn: "88 000 014 675"
}

export const store_detail = () => (
    <StoreDetail details={object("store info", woolies_store_info, "Woolworths 1")}/>
);

// getting the receipt list data ready
const item_one = {
  quantity: 8,
  item: "Cashew Nuts", 
  price: 10.0,
  discount: "1/2 Special Discount",
  discountamount: -5.0,
  description: "0.962 kg @ $3.90/kg"
};

const item_two = {
  quantity: 2,
  item: "Bok Choy", 
  price: 2.0
}

const item_three = {
  quantity: 1,
  item: "Nectarine White Flesh", 
  price: 3.75,
  description: "0.962 kg @ $3.90/kg"
}

const item_four = {
  quantity: 1,
  item: "Maple Syrup", 
  price: 3.5,
  discount: "Introductory Offer Discount",
  discountamount: -1.0
}

const item_array = [item_one, item_two, item_three, item_four] ;

// detail of transaction
const woolies_cash_transaction = {
    id: 10,
    trans_time: "11/02/19 1:05PM",
    // need to add restriction on what are the possible categories
    store_category: "Grocery",
    // item list detail
    item_list: item_array,
    cash: 100.00,
    // should be able to find store_details using store_id
    store_id: 1,
    store_details: woolies_store_info,
}

export const cash = () => (
    // parameter: name of store, time of transaction, store category, item list, total, cash, store details
    <CashTransactions details={object("transaction details", woolies_cash_transaction, "woolworths transaction 1")}/>
);