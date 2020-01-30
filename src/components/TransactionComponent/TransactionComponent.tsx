import React from "react";
import "./TransactionComponent.scss";
import Heading, { HeadingDetailsProps } from "./Heading";
import ReceiptDetail, { ReceiptDetailProps } from "./ReceiptDetail";
import PriceDetail, { PriceDetailProps } from "./PriceDetail";
import StoreDetail, { StoreDetailsProps } from "./StoreDetail";

type TransactionComponentProps = {
  heading: HeadingDetailsProps;
  items: ReceiptDetailProps;
  price: PriceDetailProps;
  store: StoreDetailsProps;
};

const TransactionComponent = ({
  heading,
  items,
  price,
  store
}: TransactionComponentProps) => {
  const Gap = {
    height: "3.2rem"
  };
  return (
    <div>
      <Heading
        id={heading.id}
        name={heading.name}
        transactionTime={heading.transactionTime}
      />

      <div className="detail-tab">
        <div style={Gap} />
        <div className="center-component">
          <ReceiptDetail
            shoppingType={items.shoppingType}
            shoppingDetail={items.shoppingDetail}
          />
        </div>

        <div style={Gap} />
        <div className="divider" />
        <div style={Gap} />

        <PriceDetail
          subtotal={price.subtotal}
          total={price.total}
          card={price.card}
        />

        <div style={Gap} />
        <div className="divider" />
        <div style={Gap} />

        <StoreDetail
          id={store.id}
          name={store.name}
          shoppingCentre={store.shoppingCentre}
          address={store.address}
          number={store.number}
          abn={store.abn}
        />
      </div>
    </div>
  );
};

export default TransactionComponent;
