import React from "react";
import "./StoreDetail.scss";

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
  // // the parameter below are added for testing
  // id = 1;
  // name = "Woolworths Supermarkets";
  // shoppingCentre = "1310 Bathurst City Centre";
  // address = "210 Howick Street";
  // number = "02 6330 8007";
  // abn = "88 000 014 675";
  // // end of testing
  const Gap = {
    height: "2.4rem"
  };

  return (
    <div className="store-detail">
      <div className="store-detail-title">Store Details</div>
      <div style={Gap} />
      <div className="store-detail-name">{name}</div>
      <div>{shoppingCentre}</div>
      <div>{address}</div>
      <div>TEL {number}</div>
      <div>ABN {abn}</div>
      <div style={Gap} />
    </div>
  );
};

export default StoreDetail;
