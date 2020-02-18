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

  const {
    params: { trans_id }
  } = match;

  console.log(trans_id);
  const detail = receiptList[trans_id - 1];
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
    return (
      <div>
        <p>{trans_id}</p>
        <p>Not working</p>
      </div>
    );
  }
};

export default TransactionComponent;
