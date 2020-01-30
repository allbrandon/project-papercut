import React from "react";
import "./PriceDetail.scss";
import CardInfo, { CardInfoProps } from "./CardInfo";

export type PriceDetailProps = {
  subtotal: number;
  total: number;
  cash?: number;
  card?: CardInfoProps;
};

const PriceDetail = ({ subtotal, total, cash, card }: PriceDetailProps) => {
  const Gap = {
    height: "1.7rem"
  };

  const LargeGap = {
    height: "3.2rem"
  };

  let str = total.toFixed(2);
  let numarray = str.split(".");

  if (cash) {
    // cash payment
    let change = cash - total;
    return (
      <div>
        <div className="general-price-info">
          <span className="price-description">Subtotal</span>
          <span>{subtotal.toFixed(2)}</span>
        </div>
        <div style={Gap} />
        <div className="total-price-info">
          <span className="total-text">Total</span>
          <span className="total-number">{numarray[0]}</span>
          <span className="total-decimal">{"." + numarray[1]}</span>
        </div>
        <div style={Gap} />
        <div className="general-price-info">
          <span className="price-description">Cash</span>
          <span>{cash.toFixed(2)}</span>
        </div>
        <div style={Gap} />
        <div className="general-price-info">
          <span className="price-description">Change</span>
          <span>{change.toFixed(2)}</span>
        </div>
      </div>
    );
  } else {
    // card payment
    return (
      <div>
        <div className="general-price-info">
          <span className="price-description">Subtotal</span>
          <span>{subtotal.toFixed(2)}</span>
        </div>
        <div style={Gap} />
        <div className="total-price-info">
          <span className="total-text">Total</span>
          <span className="total-number">{numarray[0]}</span>
          <span className="total-decimal">{"." + numarray[1]}</span>
        </div>
        <div style={LargeGap} />
        <CardInfo
          merchant_id={card.merchant_id}
          term_id={card.term_id}
          card_id={card.card_id}
          card_type={card.card_type}
          card_account={card.card_account}
          aid={card.aid}
          arqc={card.arqc}
          tur={card.tur}
          total={card.total}
          time={card.time}
        />
      </div>
    );
  }
};

export default PriceDetail;
