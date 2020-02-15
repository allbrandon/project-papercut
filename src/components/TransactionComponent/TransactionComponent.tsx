import React from "react";
import "./TransactionComponent.scss";
import Heading, { HeadingDetailsProps } from "./Heading";
import ReceiptDetail, { ReceiptDetailProps } from "./ReceiptDetail";
import PriceDetail, { PriceDetailProps } from "./PriceDetail";
import StoreDetail, { StoreDetailsProps } from "./StoreDetail";
import { receiptList, ReceiptInfo, receiptGrab } from "../ReceiptPull";

const TransactionComponent = ({ match, location }: any) => {
  const Gap = {
    height: "3.2rem"
  };
  let {
    params: { id }
  } = match;
  id = JSON.stringify(id);
  console.log(id);
  const detail = receiptGrab(id);
  console.log(detail);
  if (detail != null) {
    return (
      <div>
        <Heading
          id={detail.id}
          name={detail.store}
          transactionTime={detail.dateTime}
          category={detail.category}
        />

        <div className="detail-tab">
          <div style={Gap} />
          <div className="center-component">
            <ReceiptDetail
              shoppingType={detail.category}
              shoppingDetail={detail.items}
            />
          </div>

          <div style={Gap} />
          <div className="divider" />
          <div style={Gap} />

          <PriceDetail
            subtotal={detail.subtotal}
            total={detail.total}
            card={detail.card}
          />

          <div style={Gap} />
          <div className="divider" />
          <div style={Gap} />

          <StoreDetail
            id={detail.storeId}
            name={detail.store}
            shoppingCentre={detail.centre}
            address={detail.address}
            number={detail.number}
            abn={detail.abn}
          />
        </div>
      </div>
    );
  } else {
    console.log("not workin");
    return null;
  }
};

export default TransactionComponent;
