import React from "react";
import "./CardInfo.scss";

// issue: I don't understand some of the data in their so it is put in as a constant now

export type CardInfoProps = {
  merchant_id: number;
  term_id: string;
  card_id: string;
  card_type: string; // master card
  card_account: string; // credit
  aid: string;
  arqc: string;
  tur: string;
  total: number;
  time: string;
};

const CardInfo = ({
  merchant_id,
  term_id,
  card_id,
  card_type,
  card_account,
  aid,
  arqc,
  tur,
  total,
  time
}: CardInfoProps) => {
  const Gap = {
    height: "1.6rem"
  };

  return (
    <div>
      <div className="dotted-divider" />

      <div className="info-line">
        <span className="head">MERCH ID</span>
        <span>{merchant_id}</span>
      </div>
      <div className="info-line">
        <span className="head">TERM ID</span>
        <span>{term_id}</span>
      </div>
      <div className="info-line">
        <span className="head">CARD</span>
        <span>{card_id}</span>
      </div>
      <div className="info-line">
        <span className="head">{card_type}</span>
        <span>{card_account}</span>
      </div>
      <div className="info-line">
        <span className="head">AID</span>
        <span>{aid}</span>
      </div>
      <div className="info-line">
        <span className="head">ARQC</span>
        <span>{arqc}</span>
      </div>
      <div className="info-line">
        <span className="head">TUR</span>
        <span>{tur}</span>
      </div>
      <div className="info-line">
        <span className="head">PURCHASE</span>
        <span>{"$" + total}</span>
      </div>
      <div style={Gap} />
      <div className="info-line">
        <span className="head">TOTAL</span>
        <span>{"$" + total}</span>
      </div>
      <div className="info-line">
        <span className="head">APPROVED</span>
        <span>00</span>
      </div>
      <div className="info-line">
        <span className="head">{time}</span>
        <span>005514</span>
      </div>

      <div className="dotted-divider" />
    </div>
  );
};

export default CardInfo;
