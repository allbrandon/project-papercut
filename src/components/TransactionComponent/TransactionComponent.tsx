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
  const item_one = {
    quantity: 8,
    item: "Cashew Nuts",
    price: 10.0,
    category: "grocery",
    discountDesc: "1/2 Special Discount",
    discountAmount: -5.0,
    description: "0.962 kg @ $3.90/kg"
  };

  const item_two = {
    quantity: 2,
    item: "Bok Choy",
    category: "grocery",
    price: 2.0,
    description: ""
  };

  const item_three = {
    quantity: 1,
    item: "Nectarine White Flesh",
    price: 3.75,
    category: "grocery",
    description: "0.962 kg @ $3.90/kg"
  };

  const item_four = {
    quantity: 1,
    item: "Maple Syrup",
    price: 3.5,
    category: "grocery",
    discountDesc: "Introductory Offer Discount",
    discountAmount: -1.0,
    description: ""
  };

  // the list of receipt items
  const item_array = [item_one, item_two, item_three, item_four];

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

  heading = {
    id: 1,
    name: "Woolworths Supermarkets",
    transactionTime: "11/02/19 1:05PM"
  };

  items = {
    shoppingType: "grocery",
    shoppingDetail: item_array
  };

  price = {
    subtotal: 109.59,
    total: 109.59,
    card: card_object
  };

  store = {
    id: 1,
    name: "Woolworths Supermarkets",
    shoppingCentre: "1310 Bathurst City Centre",
    address: "210 Howick Street",
    number: "02 6330 8007",
    abn: "88 000 014 675"
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
