import React from "react";
import "./Transactions.scss";

// Parameter: An object that contains Store_details
// Restrictions: number should be in format of xx xxxx xxxx OR xxxx xxx xxx
//               abn must be in format of xx xxx xxx xxx
export type StoreDetailsProps = {
  id: number;
  name: string;
  shoppingCentre?: string;
  address: string;
  number: string;
  abn: string;
};

const StoreDetail = ({
  id,
  name,
  shoppingCentre,
  address,
  number,
  abn
}: StoreDetailsProps) => {
  return (
    <div className="store-detail">
      <div className="store-detail-name">{name}</div>
      <div>{shoppingCentre}</div>
      <div>{address}</div>
      <div>TEL {number}</div>
      <div>ABN {abn}</div>
    </div>
  );
};

export default StoreDetail;
