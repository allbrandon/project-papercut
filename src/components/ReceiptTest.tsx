import React from "react";
import ItemListComponent from "./ReceiptComponent/ItemListComponent";

const ReceiptTest = (props: any) => {
  const items = [
    {
      quantity: 2,
      item: "Cashews",
      price: 10,
      discountDesc: "1/2 Price",
      discountAmount: 5,
      category: "grocery",
      description: "Nuts"
    }
  ];
  return <ItemListComponent items={items} />;
};

export default ReceiptTest;
