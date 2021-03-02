import React from "react";
import "./ReceiptCardComponent.scss";
// import Grocery from '../../grocery.svg'
import { Link } from "@reach/router";
import IconComponent from "./../IconComponent";
// import { Icon } from '@material-ui/core';
import { ReceiptInfo } from "../ReceiptPull";

export type ReceiptCardProps = {
  //   store: string;
  //   category: string;
  //   total: number;
  //   items: Array<string>;
  //   date: string;
  //   id: number;
  receiptInfo: ReceiptInfo;
};

const ReceiptCardComponent = ({ receiptInfo }: ReceiptCardProps) => {
  let itemString = "";
  let itemList = Array<String>();
  receiptInfo.items.map(item => itemList.push(item.item));

  for (var i = 0; i < itemList.length; i++) {
    if (i === 0) {
      itemString += itemList[i];
    } else {
      itemString += ", " + itemList[i];
    }
  }
  const maxChar = 21;
  if (itemString.length > maxChar) {
    itemString = itemString.substring(0, maxChar);
    itemString =
      itemString.substring(
        0,
        Math.min(itemString.length, itemString.lastIndexOf(" "))
      ) + " . . .";
  }
  return (
    <Link to={"/receipt/" + receiptInfo.id}>
      <div className="card__container">
        <div className="receipt__card__icon">
          <div className="icon__shade">
            <IconComponent
              type={receiptInfo.category}
              size={"small"}
              shade={true}
              text=""
            />
          </div>
        </div>
        <div className="receipt__card__detail">
          <div className="receipt__card__col">
            <div className="store">{receiptInfo.store}</div>
            <div className="items">{itemString}</div>
          </div>
          <div className="receipt__card__col">
            <div className="total">${receiptInfo.total}</div>
            <div className="date">{receiptInfo.date}</div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ReceiptCardComponent;
